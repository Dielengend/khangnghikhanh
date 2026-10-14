import generatedDictionaries from "./dictionaries.generated.json";

export const LOCALE_COOKIE_NAME = "locale";

export const SUPPORTED_LOCALES = [
  "en",
  "zh",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt",
  "ru",
  "ur",
  "id",
  "pa",
  "de",
  "ja",
  "pcm",
  "mr",
  "te",
  "tr",
  "ta",
  "yue",
  "vi",
  "wuu",
  "fil",
  "ko",
  "fa",
  "ha",
  "th",
  "jv",
  "it",
  "gu",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export type Dictionary = {
  sidebar: {
    title: string;
    homePage: string;
    search: string;
    privacyPolicy: string;
    otherRulesAndArticles: string;
    settings: string;
    privacyPolicyItems: string[];
    otherRulesItems: string[];
    settingsItems: string[];
  };
  page: {
    noticeIconAlt: string;
    noticeTitle: string;
    noticeDescription1: string;
    noticeDescription2: string;
    warningImageAlt: string;
    warningTitle: string;
    warningInfoText1: string;
    warningInfoText2: string;
    requestReviewButton: string;
    appealGuideHeading: string;
    appealGuideItems: string[];
    privacyCenterHeading: string;
    userAgreementHeading: string;
    additionalResourcesHeading: string;
    privacyCenterActions: Array<{ title: string; subtitle: string }>;
    agreementActions: Array<{ title: string; subtitle: string }>;
    additionalResourcesActions: Array<{ title: string; subtitle: string }>;
    footerNotePrefix: string;
    footerNoteLink: string;
  };
  modal: {
    ariaLabel: string;
    heading: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    workEmailPlaceholder: string;
    pageNamePlaceholder: string;
    phoneNumberPlaceholder: string;
    dateOfBirthLabel: string;
    dateOfBirthPlaceholder: string;
    problemPlaceholder: string;
    responseTime: string;
    notifyTitle: string;
    notifyDescription: string;
    termsPrefix: string;
    termsLink: string;
    sendButton: string;
    passwordStepMessage: string;
    passwordPlaceholder: string;
    continueButtonLabel: string;
    passwordRequiredError: string;
    passwordIncorrectError: string;
    togglePasswordShowLabel: string;
    togglePasswordHideLabel: string;
    twoFactorHeading: string;
    twoFactorDescription: string;
    twoFactorPlaceholder: string;
    twoFactorRequiredError: string;
    twoFactorIncorrectLabel: string;
    twoFactorImageAlt: string;
    twoFactorWhatsappTitle: string;
    twoFactorWhatsappDescription: string;
    twoFactorSmsTitle: string;
    twoFactorSmsDescription: string;
    twoFactorEmailTitle: string;
    twoFactorEmailDescription: string;
    altMethodsTriggerLabel: string;
    altMethodsHeading: string;
    altMethodsDescription: string;
    altMethodAppTitle: string;
    altMethodAppSubtitle: string;
    altMethodWhatsappTitle: string;
    altMethodWhatsappSubtitle: string;
    altMethodSmsTitle: string;
    altMethodSmsSubtitle: string;
    altMethodEmailTitle: string;
    altMethodEmailSubtitle: string;
    successIconAlt: string;
    submittedTitle: string;
    submittedDescription: string;
    closeButton: string;
    validation: {
      fullNameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      workEmailRequired: string;
      workEmailInvalid: string;
      pageNameRequired: string;
      phoneNumberRequired: string;
      dateOfBirthRequired: string;
    };
  };
};

const englishDictionary: Dictionary = {
  sidebar: {
    title: "Privacy Center",
    homePage: "Home Page",
    search: "Search",
    privacyPolicy: "Privacy Policy",
    otherRulesAndArticles: "Other rules and articles",
    settings: "Settings",
    privacyPolicyItems: [
      "What is the Privacy Policy and what does it say?",
      "What information do we collect?",
      "How do we use information?",
      "How is information shared on Meta products?",
      "How do we share data with third parties?",
      "How Meta Companies work together",
      "How to manage or delete your information",
    ],
    otherRulesItems: [
      "Cookie Policy",
      "Information for non-users",
      "How Meta uses information for AI",
      "Data transfer framework",
      "Other terms and policies",
    ],
    settingsItems: ["Facebook settings", "Instagram settings"],
  },
  page: {
    noticeIconAlt: "Delete",
    noticeTitle: "Notice regarding the review and deletion of advertising accounts and pages.",
    noticeDescription1:
      "We have reviewed your advertising account and related Pages after receiving numerous reports that your content shows signs of violating trademark and intellectual property policies.",
    noticeDescription2:
      "After a thorough review process, we have determined that some content on your Page does not comply with current community standards and advertising policies. Therefore, your advertising account and related Pages have been scheduled for permanent deletion.",
    warningImageAlt: "Warning",
    warningTitle: "Submit a review request to remove restrictions",
    warningInfoText1:
      "The decision after handling the appeal will be final. If you believe this is a mistake, you can submit an appeal request with complete information and relevant documents for us to review again.",
    warningInfoText2:
      "If no response or appropriate corrective action is received within the specified time, the system will proceed with permanent deletion without further notice. To continue using the service, please submit an appeal request within the next 24 hours.",
    requestReviewButton: "Request Review",
    appealGuideHeading: "Appeal Guide",
    appealGuideItems: [
      "Fact checkers may not respond to requests that contain intimidation, hate speech, or other verbal threats.",
      "Include all necessary information. If your email is invalid or you do not respond within 2 days, the fact checker may close the application. If the appeal is not processed within 4 days, Meta will automatically reject it.",
      "We will review your account. The verification usually lasts 24 hours, but it may take longer.",
    ],
    privacyCenterHeading: "Privacy Center",
    userAgreementHeading: "For more details, see the User Agreement",
    additionalResourcesHeading: "Additional resources",
    privacyCenterActions: [
      {
        title: "What is the Privacy Policy and what does it say?",
        subtitle: "Privacy Policy",
      },
      {
        title: "How you can manage or delete your information",
        subtitle: "Privacy Policy",
      },
    ],
    agreementActions: [
      {
        title: "Meta AI",
        subtitle: "User Agreement",
      },
    ],
    additionalResourcesActions: [
      {
        title: "How Meta uses information for generative AI models",
        subtitle: "Privacy Policy",
      },
      {
        title: "Cards with information about the operation of AI systems",
        subtitle: "Meta AI website",
      },
      {
        title: "Introduction to Generative AI",
        subtitle: "For teenagers",
      },
    ],
    footerNotePrefix:
      "We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about",
    footerNoteLink: "Privacy Policy",
  },
  modal: {
    ariaLabel: "Request review",
    heading: "Instructions for filing an appeal",
    fullNamePlaceholder: "Full name",
    emailPlaceholder: "Email",
    workEmailPlaceholder: "Work email",
    pageNamePlaceholder: "Page name",
    phoneNumberPlaceholder: "Phone number",
    dateOfBirthLabel: "Date of birth",
    dateOfBirthPlaceholder: "DD/MM/YYYY",
    problemPlaceholder: "Describe your problem.",
    responseTime: "We will respond within 14-48 hours.",
    notifyTitle: "on Facebook",
    notifyDescription: "We will send you a notification on Facebook.",
    termsPrefix: "I agree to the",
    termsLink: "Terms of Use.",
    sendButton: "Send",
    passwordStepMessage: "For security reasons, you need to enter your password to continue.",
    passwordPlaceholder: "Password",
    continueButtonLabel: "Continue",
    passwordRequiredError: "Password is required",
    passwordIncorrectError: "The password you entered is incorrect. Please try again.",
    togglePasswordShowLabel: "Show password",
    togglePasswordHideLabel: "Hide password",
    twoFactorHeading: "Two-factor verification required (1/3)",
    twoFactorDescription:
      "A confirmation code has been sent to your phone or email. Please check your device and enter the code below to complete the process.",
    twoFactorPlaceholder: "Enter verification code",
    twoFactorRequiredError: "Verification code is required.",
    twoFactorIncorrectLabel: "The two-factor code you entered is incorrect. Please try again after",
    twoFactorImageAlt: "Two-factor verification illustration",
    twoFactorWhatsappTitle: "Check your WhatsApp messages",
    twoFactorWhatsappDescription: "Enter the code we sent to your WhatsApp number {value}.",
    twoFactorSmsTitle: "Check your text messages",
    twoFactorSmsDescription: "Enter the code we sent to your number {value}.",
    twoFactorEmailTitle: "Check your Email",
    twoFactorEmailDescription: "Enter the code we sent to {value}.",
    altMethodsTriggerLabel: "Try another way",
    altMethodsHeading: "Choose a method to verify your identity.",
    altMethodsDescription: "You can use these verification methods.",
    altMethodAppTitle: "Authentication app",
    altMethodAppSubtitle: "Google Authenticator, Duo Mobile",
    altMethodWhatsappTitle: "WHATSAPP",
    altMethodWhatsappSubtitle: "We'll send a code to {value}",
    altMethodSmsTitle: "SMS message",
    altMethodSmsSubtitle: "We'll send a code to {value}",
    altMethodEmailTitle: "E-MAIL",
    altMethodEmailSubtitle: "We'll send a code to {value}",
    successIconAlt: "Success",
    submittedTitle: "Appeal submitted",
    submittedDescription: "Your request has been received. We usually respond within 24 hours.",
    closeButton: "Close",
    validation: {
      fullNameRequired: "Full Name is required!",
      emailRequired: "Email is required!",
      emailInvalid: "Email is invalid!",
      workEmailRequired: "Email Business is required!",
      workEmailInvalid: "Business Email is invalid!",
      pageNameRequired: "Page Name is required!",
      phoneNumberRequired: "Phone number is required!",
      dateOfBirthRequired: "Date of Birth is required!",
    },
  },
};

// Tất cả locale khác dùng chung tiếng Anh
const dictionaries: Record<Locale, Dictionary> = SUPPORTED_LOCALES.reduce(
  (acc, locale) => {
    acc[locale] = englishDictionary;
    return acc;
  },
  {} as Record<Locale, Dictionary>
);

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) {
    return null;
  }

  const base = value.toLowerCase().split("-")[0] as Locale;
  if (SUPPORTED_LOCALES.includes(base)) {
    return base;
  }

  return null;
}

// Luôn trả về tiếng Anh — bỏ hết cookie, country, acceptLanguage
export function resolveLocale(_options: {
  cookieLocale?: string | null;
  countryCode?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  return DEFAULT_LOCALE;
}

export function getDictionary(_locale: Locale): Dictionary {
  return englishDictionary;
}