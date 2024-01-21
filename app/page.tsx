import { Text } from "@chakra-ui/react";

import Hero from "@components/Hero/Hero";
import { NavBar } from "@components/NavBar/NavBar";
import SearchBar from "@components/SearchBar/SearchBar";
import ExercisesList from "@components/ExercisesList/ExercisesList";

import { fetchExercises } from "@utils";
import { HomeProps } from "@types";

const Home = async ({ searchParams }: HomeProps) => {
  const allExercises = await fetchExercises({
    difficulty: searchParams.difficulty || "",
    muscle: searchParams.muscle || "",
  });

  console.log(allExercises);

  const isDataEmpty =
    !Array.isArray(allExercises) || allExercises.length < 1 || !allExercises;

  return (
    <>
      <NavBar />
      <Hero />
      <SearchBar />
      <ExercisesList isDataEmpty={isDataEmpty} allExercises={allExercises} />
    </>
  );
};

export default Home;
