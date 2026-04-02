# Requestly Documentation

<div align="center">
  <img src="images/logo-dark.webp" alt="Requestly Logo" width="200"/>
  
  <p>
    <strong>Official documentation for Requestly - Modify, Mock, Record & Debug HTTP requests</strong>
  </p>

  <p>
    <a href="https://docs.requestly.com">Live Documentation</a> •
    <a href="https://requestly.com">Website</a> •
    <a href="https://github.com/requestly/requestly">GitHub</a> •
    <a href="https://rqst.ly/join-community">Discord</a>
  </p>
</div>

---

## 📖 About

This repository contains the official documentation for [Requestly](https://requestly.com), organized around the main jobs users come to Requestly to do:

- **API Testing** - Send requests, manage environments, organize collections, and add assertions
- **Debugging & Interception** - Inspect traffic from browsers, mobile apps, desktop apps, emulators, and runtimes
- **Modify Traffic** - Rewrite headers, bodies, query params, redirects, and delays without changing application code
- **Mock APIs & Responses** - Create quick mocks and reusable hosted mock endpoints
- **Sessions & Collaboration** - Record bug reports, capture API sessions, and share workflows with your team
- **Public APIs** - Automate Requestly workflows programmatically

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Node.js v19 through v24. LTS versions are preferred.)
- [Mintlify CLI](https://www.mintlify.com/docs/installation)

### Installation

Clone the repository:

```bash
git clone https://github.com/requestly/requestly-docs.git
cd requestly-docs
```

For Mintlify setup and installation instructions, refer to the [Mintlify documentation](https://www.mintlify.com/docs/installation).

### Running Locally

Start the local development server:

```bash
mint dev
```

The documentation will be available at `http://localhost:3000`

## 📁 Project Structure

```
requestly-docs/
├── changelogs/          # Release notes and changelogs
├── general/             # Core product docs and onboarding
│   ├── getting-started/ # Intro, setup, and quick-start flows
│   ├── api-client/      # API testing workflows
│   ├── http-rules/      # Traffic modification workflows
│   ├── http-interceptor/# Traffic inspection and interception workflows
│   ├── mock-server/     # Hosted mocks and response simulation
│   ├── sessions/        # Bug reports, API sessions, and HAR workflows
│   └── team/            # Collaboration and workspaces
├── guides/              # Task-based guides and integration tutorials
├── public-apis/         # Programmatic Requestly APIs
├── troubleshoot/        # Setup and workflow recovery guides
├── images/              # Image assets
├── docs.json            # Mintlify configuration
└── LICENSE              # License file
```

## 📝 Contributing

We welcome contributions from the community! Whether you want to fix a typo, improve existing documentation, or add new guides, your help is appreciated.

### Ways to Contribute

1. **Fix typos or errors** - Submit a PR with corrections
2. **Improve existing docs** - Enhance clarity, add examples, or update outdated information
3. **Add new guides** - Create tutorials for specific use cases
4. **Community content** - Share your Requestly experiences and workflows

### Contribution Guidelines

1. **Fork the repository** and create a new branch for your changes
   ```bash
   git checkout -b feature/your-contribution
   ```

2. **Make your changes** following our documentation standards:
   - Use clear, concise language
   - Include code examples where appropriate
   - Add screenshots or images to illustrate steps
   - Test all code snippets and instructions
   - Use proper Markdown/MDX formatting

3. **Test locally** using `mint dev` to preview your changes

4. **Submit a Pull Request** with:
   - Clear title describing your contribution
   - Description of what you changed and why
   - Screenshots if you made visual changes

### Documentation Standards

- Use `.mdx` format for enhanced formatting capabilities
- Include frontmatter metadata (title, label, slug, description)
- Follow existing formatting conventions
- This documentation is built with [Mintlify](https://www.mintlify.com/docs) - refer to their documentation for available components and features

## 🎯 Community Content

Have a tutorial, guide, or use case to share? Check out our [Community Content folder](./community-content/README.md) for guidelines on contributing community-driven content.

## 🐛 Reporting Issues

Found an error in the documentation? Please [open an issue](https://github.com/requestly/requestly-docs/issues) with:

- Page URL or file path
- Description of the issue
- Suggested correction (if applicable)
- Screenshots (if relevant)

## 🔗 Useful Links

- **Live Documentation**: [docs.requestly.com](https://docs.requestly.com)
- **Requestly App**: [app.requestly.io](https://app.requestly.io)
- **Website**: [requestly.com](https://requestly.com)
- **GitHub**: [github.com/requestly](https://github.com/requestly)
- **Discord Community**: [rqst.ly/join-community](https://rqst.ly/join-community)

## 💬 Support

Need help?

- 📖 **Documentation**: [docs.requestly.com](https://docs.requestly.com)
- 💬 **Discord**: [Join our community](https://rqst.ly/join-community)
- 🐙 **GitHub Discussions**: [github.com/requestly/requestly/discussions](https://github.com/requestly/requestly/discussions)
- 📧 **Email**: contact@requestly.io

## 📄 License

This documentation is licensed under the [AGPL-3.0 License](LICENSE).

## 🙏 Acknowledgments

Thank you to all our contributors who help make Requestly documentation better!

<a href="https://github.com/requestly/requestly-docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=requestly/requestly-docs" />
</a>

---

<div align="center">
  <strong>Built with ❤️ by the Requestly Team</strong>
  <br/>
  <sub>Powered by <a href="https://mintlify.com">Mintlify</a></sub>
</div>
