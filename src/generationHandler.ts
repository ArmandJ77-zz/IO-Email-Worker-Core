import GenerationResponse from "./responses/generationResponse";
import mjml from "mjml";

export default class GenerationHandler {
  constructor() {}

  Handle(): GenerationResponse {
    return new GenerationResponse(true, null, []);
  }
}
