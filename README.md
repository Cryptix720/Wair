# Wair 
The Wair command is roughly equivalent to the UNIX 'which' command but in Javascript.


## Windows, UNIX & POSIX
The default operation of the path module varies based on the operating system on which a Node.js application is running. Specifically, when running on a Windows operating system, the path module will assume that Windows-style paths are being used.



<dl>
  <dt>On Windows:</dt>
  <dd>wair.basename('C:\\path\\example.html');</dd>
<dd>// Returns: 'C:\\path\\example.html'</dd>
<dd>wair.basename('C:\\path\\example.html');</dd>
<dd>// Returns: 'example.html'</dd>

  <dt>On POSIX, UNIX and Windows:</dt>
  <dd>wair.win32.basename('C:\\path\\example.html');</dd>
<dd>// Returns: 'example.html'</dd>
<dd>To achieve consistent results when working with POSIX file paths on any operating system, use wair.posix</dd>

  <dt>On POSIX, UNIX and Windows:</dt>
  <dd>wair.posix.basename('/path/example.html');</dd>
<dd>// Returns: 'example.html'</dd>
</dl>


___



## API Wair C9
WairCalls:

```javascript

The wair.parse() method returns an object whose properties represent significant elements of the wair.
wair.parse(path)

The wair.normalize() method normalizes the given path,  segments '..' and '.' resolving.
wair.normalize(path)

wair.toNamespacedPath(path)

wair.sep
wair.relative(from, to)
wair.resolve([...paths])

wair.isAbsolute();
wair.win32

The wair.posix property provides access to POSIX specific implementations of the path methods.
wair.posix

The wair.unix property provides access to UNIX specific implementations of the path methods.
wair.unix

'''
