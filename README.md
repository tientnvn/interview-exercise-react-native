# Install dependencies:
yarn install

# Install ios dependencies:
cd ios && pod install

# Change configuration file:
cp App/Config/index.dev.js App/Config/index.js

# Run ios dev:
cd ../ && react-native run-ios --simulator "iPhone 11"

# Run Metro Bundler
Check if Metro Bundler is aready started or not
If not, run:
yarn start
