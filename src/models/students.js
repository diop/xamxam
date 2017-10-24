const database = require('./database/queries')
const { encryptPassword, comparePassword, signinStudent } = require('./helper-functions')

const students = {

  createNewStudent: (student) => {
    const {name, email, password} = student

    return encryptPassword(password)
      .then((hashedPassword) => {return database.createStudent(name, email, hashedPassword)})
      .then((student) => {
        const {id, name, email, date_joined} = student
        return {id, name, email, date_joined}
      })
  },

  signInByEmail: (student, request) => {
    const {email, password: plainTextPassword} = student
    let verifiedStudent

    return database.getStudentByEmail(email)
      .then((student) => {
        const {password: hashedPassword} = student
        verifiedStudent = {
          id: student.id,
          name: student.name,
          email: student.email,
          date_joined: student.date_joined
        }
        return comparePassword(plainTextPassword, hashedPassword)
      })
      .then((match) => {
        if (match){
          signinStudent(verifiedStudent)
          return verifiedStudent
        }
        else throw Error('invalid email and/or password')
      })
  }

}

module.exports = students
