# Wair 
The Wair command is roughly equivalent to the UNIX 'which' command but in Javascript.


## Windows, UNIX & POSIX
The default operation of the path module varies based on the operating system on which a Node.js application is running. Specifically, when running on a Windows operating system, the path module will assume that Windows-style paths are being used.

So using wair.basename() might yield different results on POSIX, UNIX and Windows:

On POSIX:

wair.basename('C:\\path\\example.html');
// Returns: 'C:\\path\\example.html'
On Windows:

wair.basename('C:\\path\\example.html');
// Returns: 'example.html'
To achieve consistent results when working with Windows file paths on any operating system, use wair.win32:

On POSIX and Windows:

wair.win32.basename('C:\\path\\example.html');
// Returns: 'example.html'
To achieve consistent results when working with POSIX file paths on any operating system, use wair.posix:

On POSIX and Windows:

wair.posix.basename('/path/example.html');
// Returns: 'example.html'

## API Wair C9
WairCalls:

'''js

wair.parse(path)
wair.toNamespacedPath(path)
wair.win32
wair.sep
wair.relative(from, to)
wair.resolve([...paths])

---
The path.posix property provides access to POSIX specific implementations of the path methods.
wair.posix
---

wair.unix

'''
