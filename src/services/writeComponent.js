import fs from 'fs';

const writeComponent = (component, componentName, outputPath) => {
    const outputFilename = `${componentName}.js`;
    fs.writeFileSync(outputPath + outputFilename, component);
};

export default writeComponent;
