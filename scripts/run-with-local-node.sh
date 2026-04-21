#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
NODE_BIN_DIR="$ROOT_DIR/.local/node-v24.15.0-darwin-arm64/bin"

if [[ ! -x "$NODE_BIN_DIR/node" ]]; then
  echo "Local Node runtime not found at $NODE_BIN_DIR" >&2
  echo "Re-download or unpack the local Node toolchain before using this wrapper." >&2
  exit 1
fi

export PATH="$NODE_BIN_DIR:$PATH"

exec "$@"
