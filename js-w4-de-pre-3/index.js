const User = require('./models/user')
const Forum = require('./models/forum')
const UserInteraction = require('./interactions/user-interactions')
const Database = require('./database')

console.log('Please say something :)')


async function main() {
  const deh = new User('DehLix', '^_^', '001')
  const stella = new User ('Stella', '¯\_(ツ)_/¯', '002')
  const juno = new User ('Juno', 'ʕ•ᴥ•ʔ', '003')

  const lifestyle = new Forum ('Lifestyle', 'In fact, most of our plastic litter is currently floating around in the sea and at least 8 million tons of plastic ads up every year. Yum !', 'ಥ_ಥ')
  deh.reacts(lifestyle)
  stella.reacts(lifestyle)
  juno.reacts(lifestyle)
  lifestyle.report()

  await UserInteraction.add(deh)
  await UserInteraction.add(stella)
  await UserInteraction.add(juno)
  const users = await UserInteraction.findAll()

  console.log(users[0].name)

  }

main()
