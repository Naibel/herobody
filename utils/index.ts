import { FilterProps } from "@types";

export async function fetchExercises(filters: FilterProps) {
  let { muscle, difficulty } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": "7ab9beb561msh64d1c43cb5eb247p1a27b4jsna50a960d2826",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}&difficulty=${difficulty}`,
      {
        headers,
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
