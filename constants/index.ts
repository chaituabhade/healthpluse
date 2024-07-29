export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Aadhar Card",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Nishikant Chavan",
    Description: "(Dentist) MBBS with 10 year's experience"
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "ram kale",
    Description: "(Nurologist) MBBS with 17 year's experience"
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "faraz khan",
    Description: "(Surgeon) MD with 17 year's experience"
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Narayan Murti",
    Description: "(Neurosurgeons) MBBS with 13 year's experience"
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Amit Kale",
    Description: "(Orthopedic Surgeons) MD with 10 year's experience"
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "kunal Rao",
    Description: "(Cardiologists) MD with 20 year's experience"
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Mohan Bhagvat",
    Description: "(Gastroenterologists) MBBS with 10 year's experience"
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    Description: "(Pulmonologists) MBBS with 6 year's experience"
  },
];


export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
