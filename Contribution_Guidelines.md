Here's a step-by-step guide to contribute to this repository:

### ✅ **1\. Find an Open Issue**

*   Go to the **reflection repo** 
    
*   Click on the **"Issues"** tab.
    

    
*   Select an issue you're interested in and **read through the details** and comments carefully.
    

### 👥 **2\. Comment and Get Assigned**

*   Before working on the issue, check if someone is already assigned.
    
*   If not, **comment** on the issue:💬 Hey! I'd like to work on this. Could you assign it to me?
    
*   Wait for the maintainer to **assign the issue** to you.
    



### 🔥 **3\. Fork the Repository**

*   Click the **"Fork"** button at the top right of the repository.
    
*   This creates a copy of the repository under your GitHub account.
    

### 💻 **4\. Clone the Repository**

*   Go to your forked repository and copy the URL.
    
*   Open your terminal and run:
    

```bash
  git clone <YOUR_FORK_URL>
```

*   Navigate to the project folder:
    

```bash
 cd <REPO_NAME>
```

### 🔥 **5\. Create a New Branch**

*   Always create a new branch before making changes:

```bash
 git checkout -b <branch-name>
```
    



💡 Use a descriptive branch name, e.g., fix-bug-123 or add-feature-x.

### 🔧 **6\. Make the Necessary Changes**
* Install the Dependencies.

```bash
 npm install
```

*   Modify the code to fix the issue or add the requested feature.
    
*   Test your changes locally to ensure they work as expected.
    

### ✅ **7\. Commit Your Changes**

*   Stage the changes:
    

```bash
git add .
```

*   Commit with a descriptive message:
    

```bash
git commit -m "Fix: [Short description of the fix]"
```  

### 🔁 **8\. Push Your Branch**

*   Push your changes to your fork:
    
```bash
git push origin <branch-name>
```  


### 🔥 **9\. Create a Pull Request (PR)**

*   Go to the **original repository** (not your fork).
    
*   You'll see a banner saying:➡️ _"Compare & pull request"_
    
*   Click on it and provide the following:
    
    *   **Title:** Describe the fix/feature.
        
    *   **Description:** Explain what changes you made.
        
    *   **Issue reference:** Include Closes # to link the PR to the issue.
        
*   Click **"Create Pull Request"**.
    

### 🚀 **10\. Wait for Review and Feedback**

*   The maintainers will review your PR.
    
*   You may be asked to make some changes.
    
*   Once approved, your PR will be merged!