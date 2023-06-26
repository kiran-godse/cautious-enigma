const core = require('@actions/core');

try {
  // Perform the logic to retrieve the upstream version here
  const upstreamVersion = '1.2.3'; // Replace with your actual code to get the upstream version

  core.setOutput('version', upstreamVersion);
} catch (error) {
  core.setFailed(`Failed to get upstream version: ${error.message}`);
}

