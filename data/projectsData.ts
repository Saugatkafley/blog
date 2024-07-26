interface Project {
  title: string,
  description: string,
  role: string
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: "Nepali POS Tagging",
    description: `Tagging of Nepali text with the help of finetuning a pre-trained model. I have used mbert and distilbert for comparision. The model was trained on POS dataset from kaggle.`,
    role: '',
    href:'https://huggingface.co/Saugatkafley/distilbert-Nepali-NER',
    imgSrc: '',

  },
  {
    title: 'Nepali-English Transliteration',
    description: `Conversion of Romanized English to Nepali . mBERT model was finetuned on the parallel corpus from AI4Bharat.A UI also made for annotation for the conversion of text.`,
    role: '',
    imgSrc: '/static/images/transliteration-ui.png',
    href: '',
  },
  {
    title: 'Federated Learning',
    description: `Academic project for Artificial Intelligence. It uses distributed training of the smaller model , take the
average weights of all of them and use that to train a bigger model. Used CNN to classify digits and
Open-CV to mask digits from the picture.`,
    role: '',
    imgSrc: '/static/images/fed-model.png',
    href: 'https://github.com/Saugatkafley/Federated-Learning',
  },
  {
    title: 'Home Sewa',
    description: `Home Sewa: At-Home Service Delivery System offers a convenient way for users to register and access a wide range of services, including plumbing, carpentry, and more. Users can easily request services and track the service providers in real-time on a map, ensuring they know exactly when help will arrive. The system features an advanced matchmaking algorithm that ensures users are paired with the best-suited service professionals for their specific needs, providing a seamless and efficient service experience from start to finish.`,
    role: 'Backend Developer',
    imgSrc: '/static/images/homesewa.webp',
    href: '',
  },
  {
    title: 'Givers',
    description: `Givers : A ( Volunteer Management System ) is an intuitive platform designed to connect organizations and volunteers seamlessly. Users can register as either an organization or a volunteer. Organizations can create and manage events, while volunteers can browse and apply for these opportunities. Each application requires approval from the organization to ensure a perfect match. During the signup process, all data is thoroughly verified to maintain a secure and trustworthy environment for all participants.`,
    role: 'Backend Developer',
    imgSrc: '/static/images/givers.jpg',
    href: 'https://github.com/Saugatkafley/givers-backend',
  },
  {
    title: 'Pulchowk EMIS',
    description: `Pulchowk EMIS (Education Management Information System) revolutionizes educational administration with Assessment, Assignment, and Notice features. Educators effortlessly track student progress, allocate tasks, and communicate updates, fostering a dynamic learning environment. With streamlined operations and enhanced communication, our EMIS empowers educational institutions to drive academic excellence and student success.`,
    role: 'Backend Developer',
    imgSrc: '/static/images/emis.webp',
    href: 'https://github.com/Saugatkafley/Pulchowk_EMIS-Backend',
  },
]

export default projectsData
