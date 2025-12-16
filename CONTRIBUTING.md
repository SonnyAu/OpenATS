# Contributing to OpenATS

Thank you for your interest in contributing to OpenATS! This document provides guidelines and instructions for contributing to the project.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/OpenATS.git
   cd OpenATS
   ```
3. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Frontend Development

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Using Docker

For a containerized development environment:

```bash
docker-compose up --build
```

## Code Style

- **Frontend**: Follow the ESLint configuration provided
- **TypeScript**: Use strict typing, avoid `any` when possible
- **Components**: Use functional components with hooks
- **Styling**: Use TailwindCSS utility classes

## Testing

Before submitting a pull request:

1. **Run linter**:
   ```bash
   cd frontend
   npm run lint
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Test your changes** manually in the browser

## Pull Request Process

1. **Update documentation** if you're adding new features
2. **Ensure your code builds** without errors
3. **Follow the commit message conventions**:
   - Use clear, descriptive commit messages
   - Start with a verb: "Add", "Fix", "Update", "Refactor"
   - Keep the first line under 72 characters
4. **Submit your PR** with a clear description of:
   - What changes you made
   - Why you made them
   - Any relevant issue numbers

## Pull Request Template

```markdown
## Description
Brief description of your changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested my changes locally
```

## Areas for Contribution

We welcome contributions in these areas:

### High Priority
- **Backend API**: Resume parsing and analysis engine
- **Database Schema**: User data and resume storage
- **Authentication**: User login and registration
- **Testing**: Unit tests and integration tests

### Medium Priority
- **UI/UX Improvements**: Enhanced user interface
- **Additional Features**: Multiple file format support
- **Performance**: Optimization and caching
- **Documentation**: Tutorials and guides

### Low Priority
- **Internationalization**: Multi-language support
- **Accessibility**: WCAG compliance improvements
- **Analytics**: Usage tracking and insights

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and considerate in your interactions.

### Our Standards

**Positive behavior includes:**
- Being respectful and inclusive
- Welcoming newcomers
- Accepting constructive criticism
- Focusing on what's best for the community

**Unacceptable behavior includes:**
- Harassment or discriminatory language
- Trolling or insulting comments
- Publishing others' private information
- Any unprofessional conduct

## Questions?

If you have questions about contributing, please:
- Open an issue on GitHub
- Check existing issues and discussions
- Reach out to the maintainers

## License

By contributing to OpenATS, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to OpenATS! 🎉
