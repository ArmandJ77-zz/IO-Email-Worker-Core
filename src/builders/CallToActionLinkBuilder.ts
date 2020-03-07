import jwt from "jsonwebtoken";
import PropertyBuilderModel from "@models/propertyBuilderModel";
import { GetCallToActionSecretToken } from "@config";

export default class CallToActionLinkBuilder {
    Build(propertyModelBuilder: PropertyBuilderModel, InputData: unknown[]): string {
        const appendTo = propertyModelBuilder.AppendTo;
        const parameterKey = propertyModelBuilder.ParameterKey;
        const ShouldEncrypt = propertyModelBuilder.ShouldEncrypt;

        const data = {};

        for (const propertyModelBuilderData of propertyModelBuilder.Data) {
            const key = propertyModelBuilderData;
            const value = InputData[key];
            data[key] = value;
        }

        const token: string = ShouldEncrypt ? this.Encript(data) : data[propertyModelBuilder.Data[0]];

        if (InputData[appendTo].includes("?")) return `${InputData[appendTo]}&${parameterKey}=${token}`;
        else return `${InputData[appendTo]}?${parameterKey}=${token}`;
    }

    private Encript(data: any): string {
        const signature = GetCallToActionSecretToken();
        const token = jwt.sign(data, signature, { expiresIn: "200 days" });
        return token;
    }
}
