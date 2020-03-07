import GenerationResponse from "@responses/generationResponse";
import mjml from "mjml";
import GenerationSuccessModel from "@models/generationSuccessModel";
import DataInjectionResponse from "@responses/dataInjectionResponse";
import GenerationErrorModel from "@models/generationErrorModel";

export default class GenerationHandler {
    Generate(dataInjectionResponse: DataInjectionResponse): GenerationResponse {
        const successModels = new Array<GenerationSuccessModel>();
        const errorModels = new Array<GenerationErrorModel>();

        for (let i = 0; i < dataInjectionResponse.SuccessModels.length; i++) {
            try {
                const htmlTemplate = mjml((dataInjectionResponse.SuccessModels[i].Email() as unknown) as string);

                const successModel = new GenerationSuccessModel(
                    htmlTemplate.html,
                    i,
                    dataInjectionResponse.SuccessModels[i].To(),
                );

                successModels.push(successModel);
            } catch (ex) {
                const errorModel = new GenerationErrorModel(
                    i,
                    dataInjectionResponse.SuccessModels[i].To(),
                    JSON.stringify(dataInjectionResponse.SuccessModels[i].Email()),
                    ex,
                );

                errorModels.push(errorModel);
            }
        }

        return new GenerationResponse(!(errorModels.length > 0), successModels, errorModels);
    }
}
