import mjml2html from "mjml";

const generationHandler = enrichedTemplates => {
  let htmlEmails = [];
  let errors = [];

  for (let i = 0; i < enrichedTemplates.length; i++) {
    try {
      let htmlTemplate = mjml2html(enrichedTemplates[i].data);
      enrichedTemplates[i].data = htmlTemplate.html;
      htmlEmails.push(enrichedTemplates[i]);
    } catch (err) {
      errors.push({
        enrichedTemplatesIndex: i,
        enrichedTemplates: enrichedTemplates[i],
        error: JSON.stringify(err)
      });
    }
  }

  let response = buildResponse(htmlEmails, errors);
  return response;
};

function buildResponse(htmlEmails, errors) {
  return {
    isSuccess: errors.length > 0 ? false : true,
    data: htmlEmails,
    errors: errors
  };
}

export default generationHandler;
