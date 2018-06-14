// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#F2E8C4",
  secondary: "#3EC9A7",
  tertiary: "#2B879E",
  quarternary: "#7AE7D5",
  quinternary: "#616668"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Writing Tests in Rails
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Increasing Confidence and Coverage
          </Text>
          <Heading size={6} textColor="quinternary">Sebastian Kopp</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary" caps>Why Test?</Heading>
          <List>
            <Appear fid="1">
              <ListItem size={3} textColor="primary">Ensures our codebase runs as intended</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem size={3} textColor="primary">Expidites click testing</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem size={3} textColor="primary">Allows anyone to make changes to the code with confidence</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem size={3} textColor="primary">Enables continuous integration in agile methodology</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Different Types of Tests</Heading>
          <List>
            <ListItem>Model</ListItem>
            <ListItem>Feature</ListItem>
            <ListItem>System</ListItem>
            <ListItem>Request (Controller)</ListItem>
            <ListItem>Other (Mailers / Jobs / etc)</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="ruby"
          code={require("raw-loader!./model.example")}
          ranges={[
            { loc: [0, 200], title: "ActiveRecord Model" },
            { loc: [0, 1], title: "The Class" },
            { loc: [3, 7], note: "Associations"},
            { loc: [9, 13], note: "Validations" },
            { loc: [16, 19], note: "Instance Methods"},
            { loc: [28, 33], note: "Class Methods" }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="ruby"
          code={require("raw-loader!./unit.test.example")}
          ranges={[
            { loc: [0, 200], title: "Unit Test" },
            { loc: [9, 13], note: "Testing Associations"},
            { loc: [14, 22], note: "Testing Validations" },
            { loc: [34, 39], note: "Testing Instance Methods"},
            { loc: [62, 78], note: "Class Methods" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>General Testing Structure</Heading>
          <Heading size={6} textColor="quinternary" caps>3 Steps to testing</Heading>
          <List>
            <Appear fid="5">
              <ListItem size={3} textColor="primary">Setup</ListItem>
            </Appear>
            <Appear fid="6">
              <ListItem size={3} textColor="primary">Execution</ListItem>
            </Appear>
            <Appear fid="7">
              <ListItem size={3} textColor="primary">Assertion</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="ruby"
          code={require("raw-loader!./simple.test.example")}
          ranges={[
            { loc: [0, 200]},
            { loc: [1, 3], note: "Setup"},
            { loc: [5, 6], note: "Execution"},
            { loc: [6, 7], note: "Assertion"}
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Unit Testing Notes</Heading>
          <List>
            <ListItem>`let` vs `let!`</ListItem>
            <ListItem>FactoryBot, `create`, and `build`</ListItem>
            <ListItem>Test Database Management</ListItem>
            <ListItem>Useful Libraries</ListItem>
            <ListItem>Helper Methods</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>Feature and System Tests</Heading>
          <List>
            <ListItem>Use the Capybara library to simulate click testing</ListItem>
            <ListItem>System Tests include Javascript integrations</ListItem>
            <ListItem>Test Setup remains the same</ListItem>
            <ListItem>Execution simulates UX</ListItem>
            <ListItem>Assertions for expected elements</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="ruby"
          code={require("raw-loader!./feature.test.example")}
          ranges={[
            { loc: [0, 200], title: "System Test"},
            { loc: [3, 7], note: "Setup"},
            { loc: [9, 12], note: "Execution"},
            { loc: [12, 13], note: "Assertion"}
          ]}
        />
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>Controller Testing</Heading>
          <List>
            <ListItem>Feature testing without view rendering</ListItem>
            <ListItem>Mainly used for Internal APIs</ListItem>
            <ListItem>Make a request instead of visiting a page</ListItem>
            <ListItem>Updated to Request Testing in Version 3.5</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary" caps>Other Tests</Heading>
          <List>
            <Appear fid="8">
              <Text size={3} textColor="primary">Can check delivery and attributes of Mailers</Text>
            </Appear>
            <Appear fid="9">
              <CodePane
                lang="ruby"
                source={require('raw-loader!./mailer.line.example')}
                margin="20px auto"
                overflow="overflow"
              />
            </Appear>
            <Appear fid="10">
              <Text size={3} textColor="primary">Can execute jobs and make any following assertions</Text>
            </Appear>
            <Appear fid="11">
              <CodePane
                lang="ruby"
                source={require('raw-loader!./job.line.example')}
                margin="20px auto"
                overflow="overflow"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Coverage Example
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Goal: Test each and every scenario
          </Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="ruby"
          code={require("raw-loader!./coverage.example")}
          ranges={[
            { loc: [0, 200] },
            { loc: [1, 2], note: "Scenario 1: Role Request"},
            { loc: [1, 2], note: "Scenario 2: Token Request"},
            { loc: [2, 3], note: "Scenario 3: Request already approved"},
            { loc: [2, 3], note: "Scenario 4: Request already rejected"},
            { loc: [3, 4], note: "Scenario 5: Any role requires approval for Role Request"},
            { loc: [4, 5], note: "Scenario 6: None of the above, default to true"}
          ]}
        />
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>API Integrations</Heading>
          <List>
            <ListItem>Tests need Internet connection and proper environment variables</ListItem>
            <ListItem>Use a stubbing pattern instead to fake API responses</ListItem>
            <ListItem>Can use VCR to make one-time recordings of API calls</ListItem>
            <CodePane
              lang="ruby"
              source={require('raw-loader!./stub.line.example')}
              margin="20px auto"
              overflow="overflow"
            />
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Final Thoughts
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
