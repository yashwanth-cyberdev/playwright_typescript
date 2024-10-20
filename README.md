Find here how to publish your playwright results on Web link:

Refer to yml workflow and there are a couple of additional settings and considerations you should keep in mind after implementing this workflow:

GitHub Pages Configuration:
If you haven't already set up GitHub Pages for your repository, you'll need to do so:

Go to your repository on GitHub
Click on "Settings"
Scroll down to the "Pages" section
Under "Source", select "Deploy from a branch"
For the branch, select "gh-pages" (this is the default branch used by the action)
Click "Save"

Repository Permissions:
Ensure that your repository has the correct permissions set for GitHub Actions:

Go to "Settings" in your repository
Click on "Actions" under "Security"
In the "Workflow permissions" section, select "Read and write permissions"
Check the box for "Allow GitHub Actions to create and approve pull requests"
Click "Save"

Branch Protection Rules:
If you have branch protection rules set up for your main or master branch, you may need to allow GitHub Actions to push to the protected branch:

Go to "Settings" > "Branches"
Edit the protection rule for your main/master branch
Under "Allow pushes", check "Allow specified actors to bypass required pull requests"
Add "GitHub Actions" to the list of specified actors

Secrets:
The workflow uses ${{ secrets.GITHUB_TOKEN }}, which is automatically provided by GitHub. You don't need to set this up manually.
Test Report Retention:
Keep in mind that the workflow is set to retain the Playwright report artifact for 30 days. If you want to change this, adjust the retention-days value in the upload-artifact step.
Custom Domain (Optional):
If you want to use a custom domain for your GitHub Pages:

Go to "Settings" > "Pages"
Under "Custom domain", enter your domain name
Update your DNS settings as instructed by GitHub
If you do this, you'll need to update the reportUrl in the workflow to use your custom domain

Repository Visibility:
Remember that if your repository is private, the published GitHub Pages will also be private and only accessible to collaborators with appropriate permissions.
First Run:
After setting this up, you may need to manually run the workflow once to initialize the gh-pages branch.
Cleanup (Optional):
You might want to set up a cleanup job to remove old reports, as each run creates a new directory. This would prevent your gh-pages branch from growing indefinitely.
