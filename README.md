# QUESTION ANSWER MODEL

Question-answering tool is an front-end application developed using Next.js and Typescript. For styling tailwind is used and for components documentation storybook is used.

System takes a passage as context, question. It's been trained on question-answer pairs, including unanswerable questions, for the task of Question Answering.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

To run storybook,
```bash
yarn storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach of implementation (UI chnage made):
Change in UI design: UI for inputs question and passage is tweaked a bit to let user have a good view of result and input fields. Reason for the change is to fix UI, as in sample input fields are not properly designed they  overlap and looks disturbed.

# Developer's note
On clicking "getting the answer" if huggingface alerts "Something went wrong, please try again". I'm experiencing "OVERLOADED" response from the API. I have tried different tokens as well but its not working. I think the model availibility itself is down.

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
This is the roberta-base model, fine-tuned using the SQuAD2.0 dataset. It's been trained on question-answer pairs, including unanswerable questions, for the task of Question Answering.

# Recommendation for future versions
List of features can be added in next versions are:
- History of turns take by users can be maintained and can be show in a list. List will have a questions, passage, result of the operation and user liked it or not. 
- In system, an option to remember all passages as context can be added. So, user can take a number of different question with context loaded up. I think this way model will be able to give more context based responses and user will like to response more. 
- User should be able to add themeselves new categories and they store their passage and question for later reference
- A search bar for history list can be added.

# Contact Developer
Email: hadi.tariq02@gmail.com <br/>
LinkedIn: https://www.linkedin.com/in/haditariq02/