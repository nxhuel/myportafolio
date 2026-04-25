import { useState, useEffect, useMemo } from "react";
import { MediumArticle } from "@/types/medium";

// Sample mock data - replace with actual API call
const mockArticles: MediumArticle[] = [
  {
    id: "1",
    title: "BACKEND DEVELOPER P.1",
    description: "En este artículo, exploraremos cómo diseñar, documentar, construir y ejecutar APIs escalables desde lo básico hasta lo avanzado.",
    content: "En este artículo, exploraremos cómo diseñar, documentar, construir y ejecutar APIs escalables desde lo básico hasta lo avanzado.",
    canonicalUrl: "https://medium.com/@nahueltisera03/backend-developer-p-1-9f6d5079efc0",
    pubDate: "2026-04-24",
    author: "Nahuel Tisera",
    categories: ["Analisis de requerimientos", "Backend", "Java", "Spring Boot", "APIs", "Docker"],
    thumbnail: "/images/contenido-uno.png",
    slug: "apis-escalables-spring-boot"
  },
];

export const useMediumArticles = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Determine API URL - in dev use localhost:3001, in prod same origin
        const apiBase = import.meta.env.DEV
          ? "http://localhost:3001"
          : "";
        const response = await fetch(`${apiBase}/api/medium`);

        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          // Fall back to mock data
          setArticles(mockArticles);
        }
      } catch (err) {
        console.log("Using mock Medium data");
        setArticles(mockArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export const useFilteredArticles = (
  articles: MediumArticle[],
  search: string,
  selectedTags: string[],
  sortBy: "date" | "title" = "date"
) => {
  return useMemo(() => {
    let filtered = [...articles];

    // Search by title or description
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(searchLower) ||
          a.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((a) =>
        selectedTags.some((tag) => a.categories.includes(tag))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [articles, search, selectedTags, sortBy]);
};
