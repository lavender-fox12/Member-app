(WIP)  
Commands for Mac (Terminal) and Windows (Powershell) (Use powershell, not cmd):
    tab autocompletes, so use that a lot
    cd (directory): navigates to directory, use cd .. to return to previous directory
    sudo (command) if a command requires "elevated permissions" or something
    chmod -R a+rwX (directory): allows ALL users to read/write/execute everything in the directory. Only use on a personal computer. If you care about security a lot feel free to recommend or find any alternatives. This is just the crudest and simplest method

Setting up GitHub:
    1. Message a team lead (Shreya, Oliver) with your email so we can add you to the GitHub
    2. Download Git, google "Git" and you should see the site, default settings should be fine, Mac users need to use Homebrew, message Shreya for help. Windows users message Oliver. Linux users I'm assuming you know how to do this already.
    3. Open VSCode or whatever IDE you use, the rest of the tutorial will follow VSCode.
    4. Click the little person icon on the bottom left, check that you're signed in to GitHub, sign in if you're not.
    5. Go to this respository, click the green "Code" button, and copy the link under the HTTPS tab.
    6. Naviagte to the folder you want the Member-app repo to be in (the folder will be created, so don't need to create a separate Member App folder)
    7. Open terminal in the folder, and run git clone https://github.com/STEM-E-Youth-Career-Development-Program/Member-app.git
    8. Congrats. Navigate to VSCode's source control, click the three dots, and click "Pull" just to test. Restart VSCode if necessary.
  
Instructions for initializing React Native project: 
    1. If instructions unclear or don't work, message team leads (Windows: Oliver, Mac: Shreya) or Google it  
    2. Install node js 
    3. Install node package manager (npm)  
    4. Navigate to the Member-app directory  
    5. Run npm install
    6. Set up Android Emulator and install Expo Go on it (or on your phone)
    7. Run npm start
    8. In Expo Go, type the ip address that should show in the terminal after running npm start  
    9. The app should auto update every time you change the code and save it  
