import { Type } from "@/types/dataPokemons";

export const typesPokemonColor: { [name: string]: { color: string } } = {
  normal: {
    color: "",
  },
  fire: {
    color: "text-yellow-700",
  },
  water: {
    color: "text-blue-600",
  },
  grass: {
    color: "text-[#104435]",
  },
  flying: {
    color: "text-[#6884d9]",
  },
  fighting: {
    color: "text-[#f2516d]",
  },
  poison: {
    color: "text-[#965fc5]",
  },
  electric: {
    color: "text-[#f2cd21]",
  },
  ground: {
    color: "text-[#b5a687];",
  },
  rock: {
    color: " text-[#91939a]",
  },
  psychic: {
    color: "text-[#964fc1]",
  },
  ice: {
    color: "text-[#a1cbe4];",
  },
  bug: {
    color: "",
  },
  ghost: {
    color: "",
  },
  steel: {
    color: "",
  },
  dragon: {
    color: "text-yellow-700",
  },
  dark: {
    color: "",
  },
  fairy: {
    color: "text-[#964fc1]",
  },
};

export const useColorTitle = (types: Type[]) => {
  const tipo = types.find((type: Type) => {
    return typesPokemonColor;
  });
  return tipo?.type && typesPokemonColor[tipo?.type?.name].color;
};
