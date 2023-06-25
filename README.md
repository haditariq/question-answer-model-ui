# QUESTION ANSWER MODEL

## React: Next.js, Typescript.
## Styling: Tailwind.
## Documentation: Storybook

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach of implementation (UI chnage made):
Change in UI design: UI for inputs question and passage is tweaked a bit to let user have a good view of result and input fields. Reason for the change is to fix UI, as in sample input fields are not properly designed they  overlap and looks disturbed.


# Project folder structure:
```bash
.
├── ...
├── components                            # components folder
├──   └── Button.tsx                      # button component
├──   └── Checkbox.tsx                    # checkbox component
├──   └── Container.tsx                   # container component
├──   └── Heading.tsx                     # heading component
├──   └── SubStringBGDecorator.tsx        # sub-string modifier
├──   └── TextArea.tsx                    # open text area with label
├── data                                  # Sample data
├──   └── languages.ts                    # list of languages available in system
├──   └── sampleCategorySampleData.json   # sample categories list, with all languages variant
├── hooks                                 # Custom hooks
├── pages                                 # routes
├──   └── index.tsx                       # main page
├── service                               # REST API's
├──   └── model.ts                        # huggingface API
├── stories                               # storybook folder, all component with stories autodocs
├──├── assets
├──└── Button.stories.ts
├──└── Checkbox.stories.ts
├──└── Container.stories.ts
├──└── Heading.stories.ts
├──└── StringModifier.stories.ts
├──└── Textarea.stories.ts
├── styles                                # styles
├──└── global.css                         # global styles, tailwind
├── types                                 # typescript global types
├──└── languages.ts                       # list of languagues types
├── utils                                 # helpers
├── .env                                  # enviroment 
├── README.md                             # project explantion, features for next versions and sugesstions 
├── TASK.md                               # Task explanation
└── ...
```

# 3rd party libraries
Answering the questions models provided by [Hugging face] https://huggingface.co/deepset/roberta-base-squad2


# Recommendation for future versions
List of features can be added in next versions are:
- History of turns take by users can be maintained and can be show in a list. List will have a questions, passage, result of the operation and user liked it or not. 
- In system, an option to remember all passages as context can be added. So, user can take a number of different question with context loaded up. I think this way model will be able to give more context based responses and user will like to response more. 
- User should be able to add themeselves new categories and they store their passage and question for later reference
- A search bar for history list can be added.

# Contact Developer
Email: hadi.tariq02@gmail.com <br/>
LinkedIn: https://www.linkedin.com/in/haditariq02/