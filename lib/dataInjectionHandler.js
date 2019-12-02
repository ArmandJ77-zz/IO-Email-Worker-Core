import handlebars from "handlebars";

const dataInjectionHandler = (rawData, template) => {
  let enrichedTemplates = [];
  let errors = [];

  for (let i = 0; i < rawData.length; i++) {
    try {
      let hbsTemplate = handlebars.compile(template);

      let enrichedTemplate = hbsTemplate(rawData[i]);

      let enrichedTemplateObject = {
        rawDataIndex: i,
        to: rawData[i].Email,
        html: enrichedTemplate
      };

      enrichedTemplates.push(enrichedTemplateObject);
    } catch (err) {
      errors.push({
        rawDataIndex: i,
        rawData: JSON.stringify(rawData[i]),
        template: template,
        error: JSON.stringify(err)
      });
    }
  }

  let response = buildResponse(enrichedTemplates, errors);

  return response;
};

function buildResponse(enrichedTemplates, errors) {
  return {
    isSuccess: errors.length > 0 ? false : true,
    data: enrichedTemplates,
    errors: errors
  };
}

export default dataInjectionHandler;
