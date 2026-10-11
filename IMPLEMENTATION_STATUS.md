# Attach App project page

The Vite app uses port 5174. The following individual previews are implemented:

| URL query | Figma node | Status |
| --- | --- | --- |
| `?section=1` | `65:2754` | Implemented |
| `?section=2` | `65:2732` | Implemented with original cover images |
| `?section=3` | `69:3799` | Implemented |
| `?section=4` | `69:3801` | Implemented from separate original PNG image fills |
| `?section=5` | `69:3802` | Implemented from three separately exported PNG screens |
| `?section=6` | `69:3803` | Implemented from ten separately exported PNG screens |
| `?section=7` | `69:3804` | Implemented |
| `?section=8` | `69:3805` | Implemented with the same related-project cards and original assets as Safe 2 Destination, per request |
| `?section=9` | `65:2790` | Implemented |

The Figma MCP asset request returned original PNG fills for section 4. Sections 5 and 6 use the original individual PNG exports supplied in `section_5` and `section_6`; the copied files retain their original bytes. Section 8 reuses the Safe 2 Destination content and assets as requested.

Type checking and `vite build` pass. No local server was started.
