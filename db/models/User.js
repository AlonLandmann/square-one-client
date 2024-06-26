import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    id: String,
    createdAt: Date,
    email: String,
    username: String,
    hash: String,
    settings: {
      _id: false,
      colorScheme: String,
      fontSize: Number
    },
    modules: [
      {
        _id: false,
        id: Number,
        sections: [
          {
            _id: false,
            status: String,
            notes: String,
            chapterNr: Number,
            sectionNr: Number
          }
        ]
      }
    ]
  }
)

export default mongoose.models.User || mongoose.model('User', userSchema)
