import InputDataModel from "@models/inputDataModel";
import DataPropertiesModel from "@models/dataPropertiesModel";
import CallToActionLinkBuilder from "@builders/CallToActionLinkBuilder";
import { PropertyBuilderTypes } from "@enums/propertyBuilderTypes";

export default class PropertyBuilderHandler {
    Build(dataPropertiesModel: DataPropertiesModel, inputData: InputDataModel): InputDataModel {
        const propertyBuilderNodes = dataPropertiesModel.Properties.filter(x => x.PropertyBuilder !== undefined);

        for (let iddi = 0; iddi < inputData.Data.length; iddi++) {
            for (let pbni = 0; pbni < propertyBuilderNodes.length; pbni++) {
                const dataTemplatePropertyNode = propertyBuilderNodes[pbni].Name;

                for (let pbi = 0; pbi < propertyBuilderNodes[pbni].PropertyBuilder.length; pbi++) {
                    const builder = this.BuilderFactory(
                        propertyBuilderNodes[pbni].PropertyBuilder[pbi].Type as PropertyBuilderTypes,
                    );

                    const response = builder?.Build(
                        propertyBuilderNodes[pbni].PropertyBuilder[pbi],
                        inputData.Data[iddi],
                    );

                    inputData.Data[iddi][dataTemplatePropertyNode] = response;
                }
            }
        }

        return inputData;
    }

    private BuilderFactory(type: PropertyBuilderTypes): CallToActionLinkBuilder | null {
        switch (type) {
            case "CallToActionLink":
                {
                    return new CallToActionLinkBuilder();
                }
                break;
        }

        return null;
    }
}
