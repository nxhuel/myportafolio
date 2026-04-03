import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import { prompts } from "./prompts.js";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ai", async (req, res) => {
  const { type, data } = req.body;

  let prompt;

  // 🧠 Generar prompt correctamente
  switch (type) {
    case "create":
      prompt = prompts.createComponent(data);
      break;

    case "docs":
      prompt = prompts.generateDocs(data);
      break;

    case "readme":
      const existingReadme = fs.existsSync("README.md")
        ? fs.readFileSync("README.md", "utf-8")
        : "";

      prompt = prompts.generateReadme(`
README actual:
${existingReadme}

Nuevo contexto:
${data}
`);
      break;

    default:
      return res.status(400).json({ error: "Tipo inválido" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/auto",
        max_tokens: 2000, // 🔥 CLAVE para evitar corte
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;

    // 🧹 limpiar markdown
    const cleanReply = reply
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleanReply);
    } catch (err) {
      console.log("❌ RAW:", cleanReply);
      return res.status(500).json({
        error: "La IA no devolvió JSON válido",
        raw: cleanReply,
      });
    }

    // ⚡ CREATE FILE
    if (parsed.action === "create_file") {
      const filePath = path.join("src", parsed.file);

      fs.writeFileSync(filePath, parsed.content);

      return res.json({
        success: true,
        message: `Archivo creado: ${parsed.file}`,
      });
    }

    // 📄 WRITE README
    if (parsed.action === "write_readme") {
      fs.writeFileSync("README.md", parsed.content);

      return res.json({
        success: true,
        message: "README.md creado/actualizado",
      });
    }

    res.json({ raw: reply });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json(error.response?.data || error.message);
  }
});

app.listen(3001, () => console.log("🚀 Server en http://localhost:3001"));
