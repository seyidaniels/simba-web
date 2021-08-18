export const FormMixin = {
  methods: {
    /**
     * Silently checks if all fields (text input) are valid
     * @param fields
     * @returns {boolean}
     */
    customValidateFields(fields) {
      return Object.keys(fields).every((field) => {
        return fields[field] && fields[field].valid
      })
    },
  },
}
