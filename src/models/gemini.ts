import Model from "../Model";
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

type GeminiModelSettings = {
    apiKey: string;
    modelName: string;
}

class GeminiModel extends Model{
    
    private model: GenerativeModel;

    constructor(settings:GeminiModelSettings){
        super();
        const genAI = new GoogleGenerativeAI(settings.apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        this.model = model;
    }

    public async invoke(prompt: string): Promise<string> {
        const result = await this.model.generateContent(prompt)
        return result.response.text();
    }

}