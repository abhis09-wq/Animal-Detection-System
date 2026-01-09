# How to Run Animal Detection System on a Different Laptop

## Prerequisites
Before you begin, ensure the new laptop has **Node.js** installed.
- Download and install [Node.js](https://nodejs.org/) (LTS version recommended).
- Verify installation by opening a terminal and running: `node -v`

## Option 1: Copying Files (Quickest)
1. **Compress the Project**: On your current laptop, zip the `animal-detection-system` folder.
   > **Note**: You can skip the `node_modules` folder to make the zip file much smaller. You will reinstall dependencies on the new laptop.
2. **Transfer**: Move the zip file to the new laptop (via USB, cloud storage, etc.) and unzip it.

## Option 2: Using Git (Recommended)
1. **Push to GitHub**: If you haven't already, run these commands in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create a repo on GitHub/GitLab and follow their instructions to push
   ```
2. **Clone**: On the new laptop, run:
   ```bash
   git clone <your-repository-url>
   cd animal-detection-system
   ```

## Installation & setup
On the new laptop:

1. **Open Terminal**: Navigate to the project folder.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
   *This downloads all the libraries listed in `package.json`.*

3. **Run the App**:
   ```bash
   npm run dev
   ```
4. **Access the App**: Open the URL shown in the terminal (usually `http://localhost:5173`).

## Important: Data & Settings
Because this application runs entirely in the browser:
- **Twilio Credentials**: Your SMS keys are saved in your browser's **Local Storage**. They will **NOT** transfer with the files. You will need to re-enter them in the Settings panel on the new laptop.
- **History/Logs**: Past detection history is also stored locally and will start empty on the new machine.

## Running on Local Network (Optional)
If you want to access the app from a phone or another device on the same Wi-Fi network:
1. Run with the host flag:
   ```bash
   npm run dev -- --host
   ```
2. Use the "Network" URL shown in the terminal (e.g., `http://192.168.1.5:5173`) on your other device.
