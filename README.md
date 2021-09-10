# Photo Viewer

## Getting Started

Before getting started, make sure you have the latest version (`v16.8.0`) of [NodeJs](https://nodejs.org/en) installed.

You will need to clone the repository. Here are some ways to do so:

1. **Download Zip File**

    ![Download Zip](.config/images/clone-download.gif 'Download Zip')

    Once downloaded, extract the folder to your desired location.

2. **Git Clone**

    Open a command line tool. Make sure you have `git` installed by running:

    ```bash
    git version
    ```

    If it says that command is not recognized, install git.

     Download it [here](https://git-scm.com/downloads).

    When git is installed, `cd` into the directory you'd like to create the app in and clone the repository by running:
    ```bash
    git clone https://github.com/tdimayuga/photo-viewer.git
    ```
## Running The App ##

Now you have a new directory called: `photo-viewer`.  `cd` into it:
```bash
C:\> cd photo-viewer
```

 Next, run the following commands:

- For the development server:

    ```bash
    photo-viewer> npm install
    photo-viewer> npm run dev
    ```

- For the production server:

    ```bash
    photo-viewer> npm install
    photo-viewer> npm run build
    photo-viewer> npm run start
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How To Use

When you first open [http://localhost:3000](http://localhost:3000), you will be presented with a `login` page.

![Login](.config/images/photo-viewer-login.gif 'Login')

Use one of the following `usernames` to login:

- Bret
- Antonette
- Samantha
- Karianne
- Kamren
- Leopoldo_Corkery
- Elwyn.Skiles
- Maxime_Nienow
- Delphine
- Moriah.Stanton

**`NOTE!` Usernames are case-sensitive**

Once logged in, you will be able to create a new post, view posts, and comment on them.
You will also have access to your own profile as well as other users' profile, with limited access on the latter.

On your own profile, you will have access to your posts, user information and photos.

You will be able to access other users' profiles by viewing their posts and clicking their name.
You will not have access to others' photos, address and phone number.
