import InputDataModel from "@models/inputDataModel";
import DataPropertiesModel from "@models/dataPropertiesModel";
import { sortBy, isEqual, difference } from "lodash";
import ValidationResponse from "@responses/validationResponse";

export default class StructureValidationHandler {
    Validate(dataPropertiesModel: DataPropertiesModel, inputDataModel: InputDataModel): ValidationResponse[] {
        const results = new Array<ValidationResponse>();
        const dataPropertiesList = dataPropertiesModel.Properties.map(x => x.Name);

        for (let i = 0; i < inputDataModel.Data.length; i++) {
            const rawDataEntryProps = Object.keys(inputDataModel.Data[i]);

            const isEqualResult = isEqual(sortBy(dataPropertiesList), sortBy(rawDataEntryProps));

            if (isEqualResult) {
                results.push(new ValidationResponse(i, isEqualResult, null));
                continue;
            }

            const differenceResult = difference(dataPropertiesList, rawDataEntryProps);

            results.push(
                new ValidationResponse(
                    i,
                    isEqualResult,
                    `Input data mismatched with Data Template properties on: ${differenceResult}`,
                ),
            );
        }

        return results;
    }
}
