# Publishing Guide for sat-sol-sim

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **Verified Email**: Verify your email address
3. **npm CLI**: Make sure npm is installed and updated

## Step-by-Step Publishing Process

### 1. Check Package Name Availability

```bash
npm info sat-sol-sim
```

If you get an error "npm ERR! 404", the name is available. If you see package info, the name is taken.

### 2. Login to npm

```bash
npm login
```

Enter your npm username, password, and email when prompted.

### 3. Test Package Locally

```bash
# See what files will be included
npm pack --dry-run

# Create a test tarball
npm pack
```

### 4. Test Installation Locally

In another directory:
```bash
# Install from the tarball you created
npm install /path/to/sat-sol-sim-1.0.0.tgz

# Or link for development
cd /path/to/sat-sol-sim
npm link
cd /path/to/test-project
npm link sat-sol-sim
```

### 5. Final Pre-publication Checks

```bash
# Run any tests (if you have them)
npm test

# Check for common issues
npm doctor

# Verify package contents
npm pack --dry-run
```

### 6. Publish to npm

```bash
# First-time publish
npm publish

# If you need to publish as public (for scoped packages)
npm publish --access public
```

### 7. Verify Publication

```bash
# Check that it's published
npm info sat-sol-sim

# Test installation from npm
npm install sat-sol-sim
```

## Version Management

For future updates:

```bash
# Patch version (1.0.0 -> 1.0.1)
npm version patch
npm publish

# Minor version (1.0.1 -> 1.1.0)
npm version minor
npm publish

# Major version (1.1.0 -> 2.0.0)
npm version major
npm publish
```

## Package Information

Your package will be available at:
- **npm**: https://www.npmjs.com/package/sat-sol-sim
- **Unpkg CDN**: https://unpkg.com/sat-sol-sim@latest/
- **jsDelivr CDN**: https://cdn.jsdelivr.net/npm/sat-sol-sim@latest/

## Current Package Size

Based on `npm pack --dry-run`:
- **Total files**: 8
- **Package size**: 736.8 kB
- **Unpacked size**: 785.0 kB

**Included files**:
- `API_DOCUMENTATION.md` (7.8kB)
- `README.md` (15.5kB)
- `earth-texture.jpg` (721.0kB) - Main texture asset
- `index.d.ts` (3.2kB) - TypeScript definitions
- `package.json` (1.6kB)
- `sat-sol-sim.js` (26.2kB) - Main library
- `sat-sol-sim.min.js` (8.4kB) - Minified version
- `sats.csv` (1.4kB) - Satellite data

## Installation Commands for Users

Once published, users can install with:

```bash
# Standard installation
npm install sat-sol-sim

# With Three.js peer dependency
npm install sat-sol-sim three

# Yarn
yarn add sat-sol-sim three

# pnpm
pnpm add sat-sol-sim three
```

## CDN Usage

```html
<!-- Minified version via unpkg -->
<script src="https://unpkg.com/sat-sol-sim@latest/sat-sol-sim.min.js"></script>

<!-- Specific version -->
<script src="https://unpkg.com/sat-sol-sim@1.0.0/sat-sol-sim.min.js"></script>

<!-- Via jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/sat-sol-sim@latest/sat-sol-sim.min.js"></script>
```

## Troubleshooting

### Permission Errors
```bash
# If you get permission errors, you might need to use sudo (not recommended)
# Better: use npm config to set a different directory
npm config set prefix ~/.npm-global
```

### Package Name Conflicts
If `sat-sol-sim` is taken, consider alternatives:
- `satellite-solar-sim`
- `sat-sol-simulation`
- `solar-system-sat-sim`
- `@your-username/sat-sol-sim` (scoped package)

### Publishing Scoped Package
If you want to use a scoped package:

1. Update `package.json`:
```json
{
  "name": "@your-username/sat-sol-sim",
  ...
}
```

2. Publish with public access:
```bash
npm publish --access public
```

## Updating the Package

When you make changes:

1. Update version in `package.json` or use `npm version`
2. Update `CHANGELOG.md` (create one if needed)
3. Test locally
4. Publish: `npm publish`

## Security and Maintenance

- Enable two-factor authentication on your npm account
- Regularly update dependencies
- Monitor for security vulnerabilities: `npm audit`
- Keep your package maintained and respond to issues

## Documentation Updates

After publishing, update:
- GitHub repository README with npm installation instructions
- Package description and keywords for better discoverability
- Create examples and demos showing npm usage

Your package is now ready to be published! 🚀 