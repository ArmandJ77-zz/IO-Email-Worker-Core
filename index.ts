require("module-alias/register");

import DataInjectionHandler from "@handlers/dataInjectionHandler";
import GenerationHandler from "@handlers/generationHandler";
import PropertyBuilderHandler from "@handlers/PropertyBuilderHandler";
import StructureValidationHandler from "@handlers/structureValidationHandler";
import ValueValidationHandler from "@handlers/valueValidationHandler";

export const DataInjection: DataInjectionHandler = new DataInjectionHandler();
export const DataGeneration: GenerationHandler = new GenerationHandler();
export const PropertyBuilder: PropertyBuilderHandler = new PropertyBuilderHandler();
export const StructureValidation: StructureValidationHandler = new StructureValidationHandler();
export const ValueValidation: ValueValidationHandler = new ValueValidationHandler();
