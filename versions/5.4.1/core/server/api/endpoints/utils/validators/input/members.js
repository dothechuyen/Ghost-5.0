const jsonSchema = require("../utils/json-schema");
async function editValidate() {
    return true;
}

module.exports = {
    add: jsonSchema.validate,
    edit: editValidate,
};
