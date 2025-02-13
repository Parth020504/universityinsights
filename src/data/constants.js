import { BookOpen, GraduationCap, Globe2, Phone } from 'lucide-react';

export const countries = [
  { name: 'Russia', flag: '🇷🇺', keyFeature: 'Top Medical Universities' },
  { name: 'Uzbekistan', flag: '🇺🇿', keyFeature: 'Affordable Education' },
  { name: 'Kazakhstan', flag: '🇰🇿', keyFeature: 'Modern Facilities' },
  { name: 'Philippines', flag: '🇵🇭', keyFeature: 'English Medium' },
  { name: 'Georgia', flag: '🇬🇪', keyFeature: 'European Standards' },
  { name: 'Kyrgyzstan', flag: '🇰🇬', keyFeature: 'Low Living Costs' },
  { name: 'Egypt', flag: '🇪🇬', keyFeature: 'Rich Medical Heritage' }
];

export const benefits = [
  'Globally Recognized Degrees',
  'Affordable Education',
  'World-Class Infrastructure',
  'Multicultural Experience',
  'Clinical Exposure',
  'No Entrance Exam*'
];

export const admissionSteps = [
  {
    icon: BookOpen,
    title: "Academic Requirements",
    content: [
      "Complete 10+2 with Physics, Chemistry & Biology",
      "Minimum 50% aggregate in PCB",
      "Valid NEET Score (if applicable)",
      "Age between 17-25 years"
    ]
  },
  {
    icon: GraduationCap,
    title: "Document Preparation",
    content: [
      "Mark sheets of 10th and 12th",
      "Birth Certificate",
      "Valid Passport",
      "Passport size photographs",
      "NEET Score Card (if applicable)"
    ]
  },
  {
    icon: Globe2,
    title: "University Selection",
    content: [
      "Choose preferred country",
      "Select universities based on budget",
      "Review course curriculum",
      "Check university recognition status",
      "Evaluate living costs and accommodation"
    ]
  },
  {
    icon: Phone,
    title: "Application Process",
    content: [
      "Fill application form",
      "Submit required documents",
      "Pay application fees",
      "Await acceptance letter",
      "Apply for student visa"
    ]
  }
];