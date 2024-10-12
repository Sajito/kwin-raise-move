function raiseWindow(window) {
  if (!window.active) {
    return;
  }

  workspace.raiseWindow(window);
}

function registerMoveListener(window) {
  window.outputChanged.connect(() => raiseWindow(window));
}

for (const window of workspace.stackingOrder) {
  registerMoveListener(window);
}

workspace.windowAdded.connect(registerMoveListener);