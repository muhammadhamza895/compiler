import { readFileAsTxt } from "./file_to_txt.js";
import { lexicalAnalyzer } from "./lexicalAnalyzer.js";
import { wordSplitter } from "./wordSplitter.js";

const filePath = "inputCode.txt";

const main = async () => {
    const codeString = await readFileAsTxt(filePath);

    lexicalAnalyzer(wordSplitter(codeString));
}

main()

