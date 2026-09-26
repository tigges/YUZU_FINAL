export const faqs = [
  {
    question: 'How much is a haircut at Yuzu in Ealing?',
    answer:
      'A ladies wash, cut and style starts at £58 with a stylist and £87 with a senior stylist. Gents wash, cut and style is £58 with a senior stylist. Kids 12 and under start at £29. Blow-dries start at £41. See the HTML price list for colour, balayage and treatments.',
  },
  {
    question: 'Do I need a patch test before hair colour?',
    answer:
      'Yes. Colour services need a mandatory patch test for every client, including existing guests, at least 48 hours before the appointment. Book the test on Phorest and read the 2025 patch-testing notes.',
  },
  {
    question: 'Which hair salons in Ealing are near the station?',
    answer:
      'Yuzu Hair & Beauty is at 5 Dickens Yard, Longfield Avenue, Ealing, W5 2TD, about a two-minute walk from Ealing Broadway station. We are a Japanese hair salon London visitors use for cuts, colour, balayage and Brazilian blow-dry.',
  },
  {
    question: 'What are the opening hours?',
    answer:
      'Tuesday to Friday 10am–8pm, Saturday 9am–6pm. Monday and Sunday the salon is closed. Call 020 8840 2244 if you need to check a late chair.',
  },
  {
    question: 'How do I book?',
    answer:
      'Book on Phorest or call 020 8840 2244. Say whether you want a senior stylist or stylist so the price matches the chair. Colour guests should book the patch test first.',
  },
]

export type CleanSubpage = 'about' | 'prices' | 'questions'

export const cleanSubpages: Record<CleanSubpage, { file: string; title: string; description: string; h1: string }> = {
  about: {
    file: 'about.html',
    title: 'About the Team at Yuzu Hair Ealing',
    description:
      'Meet the stylists at Yuzu Hair & Beauty, a Japanese hair salon in Dickens Yard, Ealing Broadway. Cuts, colour and Brazilian blow-dry.',
    h1: 'About the stylists at Yuzu Hair & Beauty',
  },
  prices: {
    file: 'prices.html',
    title: 'Hair Price List Ealing Broadway | Yuzu Hair',
    description:
      'HTML price list for Yuzu Hair & Beauty in Ealing: cuts, colour, balayage and treatments, senior and stylist menus. Book online or call 020 8840 2244.',
    h1: 'Price list for the hair salon in Ealing',
  },
  questions: {
    file: 'questions.html',
    title: 'Questions at the Hair Salon in Ealing',
    description:
      'Haircut prices, patch tests, hours and how to find Yuzu Hair & Beauty next to Ealing Broadway station. Answers from the Dickens Yard salon.',
    h1: 'Questions about Yuzu Hair & Beauty in Ealing',
  },
}
