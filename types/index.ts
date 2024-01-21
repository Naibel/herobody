export interface FilterProps {
  muscle?: Muscle | "";
  difficulty?: Difficulty | "";
}

export type Muscle =
  | "abdominals"
  | "abductors"
  | "adductors"
  | "biceps"
  | "calves"
  | "chest"
  | "forearms"
  | "glutes"
  | "hamstrings"
  | "lats"
  | "lower_back"
  | "middle_back"
  | "neck"
  | "quadriceps"
  | "traps"
  | "triceps";

export type Difficulty = "beginner" | "intermediate" | "expert";

export interface HomeProps {
  searchParams: FilterProps;
}

export interface ExercisesProps {
  isDataEmpty: boolean;
  allExercises: Array<ExerciseProps>;
}

export interface ExerciseProps {
  name: string;
  type: string;
  muscle: Muscle;
  equipment: string;
  difficulty: Difficulty;
  instructions: string;
}
