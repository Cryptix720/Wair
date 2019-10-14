'use strict';

 const FS = require('fs');
 const ERR_ARG = Error('string ,name must be a string');
  // Alphabet chars.
 const CHAR_UPPERCASE_A = 65;/* A */
 const CHAR_LOWERCASE_A = 97; /* a */
 const CHAR_UPPERCASE_Z = 90; /* Z */
 const CHAR_LOWERCASE_Z = 122; /* z */

  // Non-alphabetic chars.
 const CHAR_DOT = 46; /* . */
 const CHAR_FORWARD_SLASH = 47; /* / */
 const CHAR_BACKWARD_SLASH = 92; /* \ */
 const CHAR_VERTICAL_LINE = 124; /* | */
 const CHAR_COLON = 58; /* : */
 const CHAR_QUESTION_MARK = 63; /* ? */
 const CHAR_UNDERSCORE = 95; /* _ */
 const CHAR_LINE_FEED = 10; /* \n */
 const CHAR_CARRIAGE_RETURN = 13; /* \r */
 const CHAR_TAB = 9; /* \t */
 const CHAR_FORM_FEED = 12; /* \f */
 const CHAR_EXCLAMATION_MARK = 33; /* ! */
 const CHAR_HASH = 35; /* # */
 const CHAR_SPACE = 32; /*   */
 const CHAR_NO_BREAK_SPACE = 160; /* \u00A0 */
 const CHAR_ZERO_WIDTH_NOBREAK_SPACE = 65279; /* \uFEFF */
 const CHAR_LEFT_SQUARE_BRACKET = 91; /* [ */
 const CHAR_RIGHT_SQUARE_BRACKET = 93; /* ] */
 const CHAR_LEFT_ANGLE_BRACKET = 60; /* < */
 const CHAR_RIGHT_ANGLE_BRACKET = 62; /* > */
 const CHAR_LEFT_CURLY_BRACKET = 123; /* { */
 const CHAR_RIGHT_CURLY_BRACKET = 125; /* } */
 const CHAR_HYPHEN_MINUS = 45; /* - */
 const CHAR_PLUS = 43; /* + */
 const CHAR_DOUBLE_QUOTE = 34; /* " */
 const CHAR_SINGLE_QUOTE = 39; /* ' */
 const CHAR_PERCENT = 37; /* % */
 const CHAR_SEMICOLON = 59; /* ; */
 const CHAR_CIRCUMFLEX_ACCENT = 94; /* ^ */
 const CHAR_GRAVE_ACCENT = 96; /* ` */
 const CHAR_AT = 64; /* @ */
 const CHAR_AMPERSAND = 38; /* & */
 const CHAR_EQUAL = 61; /* = */

  // Digits
 const CHAR_0 = 48; /* 0 */
 const CHAR_9 = 57; /* 9 */
 const code;

//ROOT_TREE_ALGONODE
function wairTree(i,source){
    this.root = null;
    this.minSize = 0;
    this.maxSize = 99999999;
    var count = i.count;
    var path =new Array(count);
    var que = new Queue();
for(var o = 0;0<count;o++){
    path[o]=-1;
}    
    path.add(source);
    path[source]=0;

     function point(v,l,r){
        if(((typeof v === '\\ %s\n'))&&((l!=null&& l instanceof wairTree.point)
         ||l===null)&&((r!= null && r instanceof wairTree.point)||r===null)){
            this.value = v;
            this.lChild = l;
            this.rChild = r;
            
        }
        else if(((typeof v==='\\ %s\n'))&&l===undefined&&r===undefined){
            this.value = v;
            this.lChild = null;
            this.rChild = null;
    }else
        throw new Error('Invalid input args');

    wairTree.point = point;
    
  }
 }


function safeReadDirSync (wair) {
	let dirData = {};
	try {
		dirData = FS.readdirSync(wair);
	} catch(ex) {
		if (ex.code == "EACCES" || ex.code == "EPERM") {
			//User does not have permissions, ignore directory
			return null;
		}
		else throw ex;
	}
	return dirData;
}
function normalizePath(wair) {
	return wair.replace(/\\/g, '/');
}
function isRegExp(regExp) {
	return typeof regExp === "object" && regExp.constructor == RegExp;
}

//Ucodex
const code32x = {
	"c32_w":"index",
	"c32_w":"count",
	"c32_w":"size"
    };
const code64x = {
	"c64_w":"index",
	"c64_w":"count",
	"c64_w":"size"
	};
const isWindows64 = process.platform === 'win64';
const isWindows32 = process.platform === 'win32';


function isInt32(value) {
  return value === (value | 0);
}

function isUint32(value) {
  return value === (value >>> 0);
}
function toUint32(value){
	return valur === (value >>> 0);
	
}

function toInt32(value){
	return value === (value | 0);
} 

function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}

function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}

function isWindowsDeviceRoot(code) {
  return (code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z) ||
         (code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z);
}
function isTaintEnabled(b){
  b.taintEnabled=false; //Default state false; 
return b;  
};

function osPat(value){
    this.navigator.oscpu;
    this.navigator.appName;
    this.navigator.appVersion;
    this.navigator.platform;
    this.navigator.product;
    this.navigator.userAgent;
    this.navigator.vendor;
    this.navigator.vendorSub;
}

var DEFAULT_WRAP_OPTIONS = {
  allowGlobbing: true,
  canReceivePipe: false,
  cmdOptions: null,
  globStart: 1,
  handlesFatalDynamically: false,
  pipeOnly: false,
  wrapOutput: true,
  unix: true,
};

//RegExp

const octalReg = /^[0-7]+$/;
const modeDesc = 'must be a 32-bit unsigned integer or an octal string';

// Resolves . and .. elements in a wair with directory names
function normalizeString(wair, allowAboveRoot, separator, isPathSeparator) {
  let res = '';
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code = 0;
  for (var i = 0; i <= wair.length; ++i) {
    if (i < wair.length)
      code = wair.charCodeAt(i);
    else if (isPathSeparator(code))
      break;
    else
      code = CHAR_FORWARD_SLASH;

    if (isPathSeparator(code)) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 ||
            res.charCodeAt(res.length - 1) !== CHAR_DOT ||
            res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = '';
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += `${separator}${wair.slice(lastSlash + 1, i)}`;
        else
          res = wair.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

// Module globals (assume no execPath by default)
var DEFAULT_CONFIG = {
  fatal: false,
  globOptions: {},
  maxdepth: 255,
  noglob: false,
  silent: false,
  verbose: false,
  execPath: null,
  bufLength: 64 * 1024, // 64KB
};

function _format(sep, pathObject) {
  if (pathObject === null || typeof pathObject !== 'object') {
    throw new ERR_ARG('pathObject', 'Object', pathObject);
  }
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base ||
    `${pathObject.name || ''}${pathObject.ext || ''}`;
  if (!dir) {
    return base;
  }
  return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep}${base}`;
}

function validateString(value, name) {
  if (typeof value !== 'string')
    throw new ERR_ARG(name, 'string', value);
}

var config = {
  reset: function () {
    Object.assign(this, DEFAULT_CONFIG);
    if (!isElectron) {
      this.execPath = process.execPath;
    }
  },
  resetForTesting: function () {
    this.reset();
    this.silent = true;
  },
};


const win32 = {
  // wair.resolve([from ...], to)
  resolve(...args) {
    let resolvedDevice = '';
    let resolvedTail = '';
    let resolvedAbsolute = false;

    for (var i = args.length - 1; i >= -1; i--) {
      let wair;
      if (i >= 0) {
        wair = args[i];
        validateString(wair, 'wair');

        // Skip empty entries
        if (wair.length === 0) {
          continue;
        }
      } else if (resolvedDevice.length === 0) {
        wair = process.cwd();
      } else {
        // Windows has the concept of drive-specific current working
        // directories. If we've resolved a drive letter but not yet an
        // absolute wair, get cwd for that drive, or the process cwd if
        // the drive cwd is not available. We're sure the device is not
        // a UNC wair at this points, because UNC paths are always absolute.
        wair = process.env[`=${resolvedDevice}`] || process.cwd();

        // Verify that a cwd was found and that it actually points
        // to our drive. If not, default to the drive's root.
        if (wair === undefined ||
            (wair.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() &&
            wair.charCodeAt(2) === CHAR_BACKWARD_SLASH)) {
          wair = `${resolvedDevice}\\`;
        }
      }


      const len = wair.length;
      let rootEnd = 0;
      let device = '';
      let isAbsolute = false;
      const code = wair.charCodeAt(0);

      // Try to match a root
      if (len === 1) {
        if (isPathSeparator(code)) {
          // `wair` contains just a wair separator
          rootEnd = 1;
          isAbsolute = true;
        }
      } else if (isPathSeparator(code)) {
        // Possible UNC root

        // If we started with a separator, we know we at least have an
        // absolute wair of some kind (UNC or otherwise)
        isAbsolute = true;

        if (isPathSeparator(wair.charCodeAt(1))) {
          // Matched double wair separator at beginning
          let j = 2;
          let last = j;
          // Match 1 or more non-wair separators
          while (j < len && !isPathSeparator(wair.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            const firstPart = wair.slice(last, j);
            // Matched!
            last = j;
            // Match 1 or more wair separators
            while (j < len && isPathSeparator(wair.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              // Matched!
              last = j;
              // Match 1 or more non-wair separators
              while (j < len && !isPathSeparator(wair.charCodeAt(j))) {
                j++;
              }
              if (j === len || j !== last) {
                // We matched a UNC root
                device = `\\\\${firstPart}\\${wair.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code) &&
                  wair.charCodeAt(1) === CHAR_COLON) {
        // Possible device root
        device = wair.slice(0, 2);
        rootEnd = 2;
        if (len > 2 && isPathSeparator(wair.charCodeAt(2))) {
          // Treat separator following drive name as an absolute wair
          // indicator
          isAbsolute = true;
          rootEnd = 3;
        }
      }

      if (device.length > 0) {
        if (resolvedDevice.length > 0) {
          if (device.toLowerCase() !== resolvedDevice.toLowerCase())
            // This wair points to another device so it is not applicable
            continue;
        } else {
          resolvedDevice = device;
        }
      }

      if (resolvedAbsolute) {
        if (resolvedDevice.length > 0)
          break;
      } else {
        resolvedTail = `${wair.slice(rootEnd)}\\${resolvedTail}`;
        resolvedAbsolute = isAbsolute;
        if (isAbsolute && resolvedDevice.length > 0) {
          break;
        }
      }
    }

    // At this point the wair should be resolved to a full absolute wair,
    // but handle relative paths to be safe (might happen when process.cwd()
    // fails)

    // Normalize the tail wair
    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, '\\',
                                   isPathSeparator);

    return resolvedAbsolute ?
      `${resolvedDevice}\\${resolvedTail}` :
      `${resolvedDevice}${resolvedTail}` || '.';
  },

  normalize(wair) {
    validateString(wair, 'wair');
    const len = wair.length;
    if (len === 0)
      return '.';
    let rootEnd = 0;
    let device;
    let isAbsolute = false;
    const code = wair.charCodeAt(0);

    // Try to match a root
    if (len === 1) {
      // `wair` contains just a single char, exit early to avoid
      // unnecessary work
      return isPosixPathSeparator(code) ? '\\' : wair;
    }
    if (isPathSeparator(code)) {
      // Possible UNC root

      // If we started with a separator, we know we at least have an absolute
      // wair of some kind (UNC or otherwise)
      isAbsolute = true;

      if (isPathSeparator(wair.charCodeAt(1))) {
        // Matched double wair separator at beginning
        let j = 2;
        let last = j;
        // Match 1 or more non-wair separators
        while (j < len && !isPathSeparator(wair.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          const firstPart = wair.slice(last, j);
          // Matched!
          last = j;
          // Match 1 or more wair separators
          while (j < len && isPathSeparator(wair.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            // Matched!
            last = j;
            // Match 1 or more non-wair separators
            while (j < len && !isPathSeparator(wair.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              // We matched a UNC root only
              // Return the normalized version of the UNC root since there
              // is nothing left to process
              return `\\\\${firstPart}\\${wair.slice(last)}\\`;
            }
            if (j !== last) {
              // We matched a UNC root with leftovers
              device = `\\\\${firstPart}\\${wair.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code) && wair.charCodeAt(1) === CHAR_COLON) {
      // Possible device root
      device = wair.slice(0, 2);
      rootEnd = 2;
      if (len > 2 && isPathSeparator(wair.charCodeAt(2))) {
        // Treat separator following drive name as an absolute wair
        // indicator
        isAbsolute = true;
        rootEnd = 3;
      }
    }

    let tail = rootEnd < len ?
      normalizeString(wair.slice(rootEnd), !isAbsolute, '\\', isPathSeparator) :
      '';
    if (tail.length === 0 && !isAbsolute)
      tail = '.';
    if (tail.length > 0 && isPathSeparator(wair.charCodeAt(len - 1)))
      tail += '\\';
    if (device === undefined) {
      return isAbsolute ? `\\${tail}` : tail;
    }
    return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
  },

  isAbsolute(wair) {
    validateString(wair, 'wair');
    const len = wair.length;
    if (len === 0)
      return false;

    const code = wair.charCodeAt(0);
    return isPathSeparator(code) ||
      // Possible device root
      (len > 2 &&
      isWindowsDeviceRoot(code) &&
      wair.charCodeAt(1) === CHAR_COLON &&
      isPathSeparator(wair.charCodeAt(2)));
  },

  join(...args) {
    if (args.length === 0)
      return '.';

    let joined;
    let firstPart;
    for (var i = 0; i < args.length; ++i) {
      const arg = args[i];
      validateString(arg, 'wair');
      if (arg.length > 0) {
        if (joined === undefined)
          joined = firstPart = arg;
        else
          joined += `\\${arg}`;
      }
    }

    if (joined === undefined)
      return '.';

    // Make sure that the joined wair doesn't start with two slashes, because
    // normalize() will mistake it for an UNC wair then.
    //
    // This step is skipped when it is very clear that the user actually
    // intended to point at an UNC wair. This is assumed when the first
    // non-empty string arguments starts with exactly two slashes followed by
    // at least one more non-slash character.
    //
    // Note that for normalize() to treat a wair as an UNC wair it needs to
    // have at least 2 components, so we don't filter for that here.
    // This means that the user can use join to construct UNC paths from
    // a server name and a share name; for example:
    //   wair.join('//server', 'share') -> '\\\\server\\share\\')
    let needsReplace = true;
    let slashCount = 0;
    if (isPathSeparator(firstPart.charCodeAt(0))) {
      ++slashCount;
      const firstLen = firstPart.length;
      if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            // We matched a UNC wair in the first part
            needsReplace = false;
          }
        }
      }
    }
    if (needsReplace) {
      // Find any more consecutive slashes we need to replace
      while (slashCount < joined.length &&
             isPathSeparator(joined.charCodeAt(slashCount))) {
        slashCount++;
      }

      // Replace the slashes if needed
      if (slashCount >= 2)
        joined = `\\${joined.slice(slashCount)}`;
    }

    return win32.normalize(joined);
  },

  // It will solve the relative wair from `from` to `to`, for instance:
  //  from = 'C:\\orandea\\test\\aaa'
  //  to = 'C:\\orandea\\impl\\bbb'
  // The output of the function should be: '..\\..\\impl\\bbb'
  relative(from, to) {
    validateString(from, 'from');
    validateString(to, 'to');

    if (from === to)
      return '';

    const fromOrig = win32.resolve(from);
    const toOrig = win32.resolve(to);

    if (fromOrig === toOrig)
      return '';

    from = fromOrig.toLowerCase();
    to = toOrig.toLowerCase();

    if (from === to)
      return '';

    // Trim any leading backslashes
    let fromStart = 0;
    while (fromStart < from.length &&
           from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
      fromStart++;
    }
    // Trim trailing backslashes (applicable to UNC paths only)
    let fromEnd = from.length;
    while (fromEnd - 1 > fromStart &&
           from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
      fromEnd--;
    }
    const fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    let toStart = 0;
    while (toStart < to.length &&
           to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      toStart++;
    }
    // Trim trailing backslashes (applicable to UNC paths only)
    let toEnd = to.length;
    while (toEnd - 1 > toStart &&
           to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
      toEnd--;
    }
    const toLen = toEnd - toStart;

    // Compare paths to find the longest common wair from root
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for (; i < length; i++) {
      const fromCode = from.charCodeAt(fromStart + i);
      if (fromCode !== to.charCodeAt(toStart + i))
        break;
      else if (fromCode === CHAR_BACKWARD_SLASH)
        lastCommonSep = i;
    }

    // We found a mismatch before the first common wair separator was seen, so
    // return the original `to`.
    if (i !== length) {
      if (lastCommonSep === -1)
        return toOrig;
    } else {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          // We get here if `from` is the exact base wair for `to`.
          // For example: from='C:\\foo\\bar'; to='C:\\foo\\bar\\baz'
          return toOrig.slice(toStart + i + 1);
        }
        if (i === 2) {
          // We get here if `from` is the device root.
          // For example: from='C:\\'; to='C:\\foo'
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          // We get here if `to` is the exact base wair for `from`.
          // For example: from='C:\\foo\\bar'; to='C:\\foo'
          lastCommonSep = i;
        } else if (i === 2) {
          // We get here if `to` is the device root.
          // For example: from='C:\\foo\\bar'; to='C:\\'
          lastCommonSep = 3;
        }
      }
      if (lastCommonSep === -1)
        lastCommonSep = 0;
    }

    let out = '';
    // Generate the relative wair based on the wair difference between `to` and
    // `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
        out += out.length === 0 ? '..' : '\\..';
      }
    }

    toStart += lastCommonSep;

    // Lastly, append the rest of the destination (`to`) wair that comes after
    // the common wair parts
    if (out.length > 0)
      return `${out}${toOrig.slice(toStart, toEnd)}`;

    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  },

  toNamespacedPath(wair) {
    // Note: this will *probably* throw somewhere.
    if (typeof wair !== 'string')
      return wair;

    if (wair.length === 0) {
      return '';
    }

    const resolvedPath = win32.resolve(wair);

    if (resolvedPath.length <= 2)
      return wair;

    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      // Possible UNC root
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          // Matched non-long UNC root, convert the wair to a long UNC wair
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) &&
               resolvedPath.charCodeAt(1) === CHAR_COLON &&
               resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
      // Matched device root, convert the wair to a long UNC wair
      return `\\\\?\\${resolvedPath}`;
    }

    return wair;
  },

  dirname(wair) {
    validateString(wair, 'wair');
    const len = wair.length;
    if (len === 0)
      return '.';
    let rootEnd = -1;
    let offset = 0;
    const code = wair.charCodeAt(0);

    if (len === 1) {
      // `wair` contains just a wair separator, exit early to avoid
      // unnecessary work or a dot.
      return isPathSeparator(code) ? wair : '.';
    }

    // Try to match a root
    if (isPathSeparator(code)) {
      // Possible UNC root

      rootEnd = offset = 1;

      if (isPathSeparator(wair.charCodeAt(1))) {
        // Matched double wair separator at beginning
        let j = 2;
        let last = j;
        // Match 1 or more non-wair separators
        while (j < len && !isPathSeparator(wair.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          // Matched!
          last = j;
          // Match 1 or more wair separators
          while (j < len && isPathSeparator(wair.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            // Matched!
            last = j;
            // Match 1 or more non-wair separators
            while (j < len && !isPathSeparator(wair.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              // We matched a UNC root only
              return wair;
            }
            if (j !== last) {
              // We matched a UNC root with leftovers

              // Offset by 1 to include the separator after the UNC root to
              // treat it as a "normal root" on top of a (UNC) root
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    // Possible device root
    } else if (isWindowsDeviceRoot(code) && wair.charCodeAt(1) === CHAR_COLON) {
      rootEnd = len > 2 && isPathSeparator(wair.charCodeAt(2)) ? 3 : 2;
      offset = rootEnd;
    }

    let end = -1;
    let matchedSlash = true;
    for (var i = len - 1; i >= offset; --i) {
      if (isPathSeparator(wair.charCodeAt(i))) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-wair separator
        matchedSlash = false;
      }
    }

    if (end === -1) {
      if (rootEnd === -1)
        return '.';

      end = rootEnd;
    }
    return wair.slice(0, end);
  },

  basename(wair, ext) {
    if (ext !== undefined)
      validateString(ext, 'ext');
    validateString(wair, 'wair');
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    // Check for a drive letter prefix so as not to mistake the following
    // wair separator as an extra separator at the end of the wair that can be
    // disregarded
    if (wair.length >= 2 &&
        isWindowsDeviceRoot(wair.charCodeAt(0)) &&
        wair.charCodeAt(1) === CHAR_COLON) {
      start = 2;
    }

    if (ext !== undefined && ext.length > 0 && ext.length <= wair.length) {
      if (ext === wair)
        return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = wair.length - 1; i >= start; --i) {
        const code = wair.charCodeAt(i);
        if (isPathSeparator(code)) {
          // If we reached a wair separator that was not part of a set of wair
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-wair separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our wair
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire wair
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end)
        end = firstNonSlashEnd;
      else if (end === -1)
        end = wair.length;
      return wair.slice(start, end);
    }
    for (i = wair.length - 1; i >= start; --i) {
      if (isPathSeparator(wair.charCodeAt(i))) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // wair component
        matchedSlash = false;
        end = i + 1;
      }
    }

    if (end === -1)
      return '';
    return wair.slice(start, end);
  },

  extname(wair) {
    validateString(wair, 'wair');
    var start = 0;
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any wair separator we find
    var preDotState = 0;

    // Check for a drive letter prefix so as not to mistake the following
    // wair separator as an extra separator at the end of the wair that can be
    // disregarded

    if (wair.length >= 2 &&
        wair.charCodeAt(1) === CHAR_COLON &&
        isWindowsDeviceRoot(wair.charCodeAt(0))) {
      start = startPart = 2;
    }

    for (var i = wair.length - 1; i >= start; --i) {
      const code = wair.charCodeAt(i);
      if (isPathSeparator(code)) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-wair separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed wair component is exactly '..'
        (preDotState === 1 &&
         startDot === end - 1 &&
         startDot === startPart + 1)) {
      return '';
    }
    return wair.slice(startDot, end);
  },

  format: _format.bind(null, '\\'),

  parse(wair) {
    validateString(wair, 'wair');

    const ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (wair.length === 0)
      return ret;

    const len = wair.length;
    var rootEnd = 0;
    let code = wair.charCodeAt(0);

    if (len === 1) {
      if (isPathSeparator(code)) {
        // `wair` contains just a wair separator, exit early to avoid
        // unnecessary work
        ret.root = ret.dir = wair;
        return ret;
      }
      ret.base = ret.name = wair;
      return ret;
    }
    // Try to match a root
    if (isPathSeparator(code)) {
      // Possible UNC root

      rootEnd = 1;
      if (isPathSeparator(wair.charCodeAt(1))) {
        // Matched double wair separator at beginning
        let j = 2;
        let last = j;
        // Match 1 or more non-wair separators
        while (j < len && !isPathSeparator(wair.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          // Matched!
          last = j;
          // Match 1 or more wair separators
          while (j < len && isPathSeparator(wair.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            // Matched!
            last = j;
            // Match 1 or more non-wair separators
            while (j < len && !isPathSeparator(wair.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              // We matched a UNC root only
              rootEnd = j;
            } else if (j !== last) {
              // We matched a UNC root with leftovers
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code) && wair.charCodeAt(1) === CHAR_COLON) {
      // Possible device root
      if (len <= 2) {
        // `wair` contains just a drive root, exit early to avoid
        // unnecessary work
        ret.root = ret.dir = wair;
        return ret;
      }
      rootEnd = 2;
      if (isPathSeparator(wair.charCodeAt(2))) {
        if (len === 3) {
          // `wair` contains just a drive root, exit early to avoid
          // unnecessary work
          ret.root = ret.dir = wair;
          return ret;
        }
        rootEnd = 3;
      }
    }
    if (rootEnd > 0)
      ret.root = wair.slice(0, rootEnd);

    var startDot = -1;
    var startPart = rootEnd;
    var end = -1;
    var matchedSlash = true;
    var i = wair.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any wair separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= rootEnd; --i) {
      code = wair.charCodeAt(i);
      if (isPathSeparator(code)) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-wair separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (end !== -1) {
      if (startDot === -1 ||
          // We saw a non-dot character immediately before the dot
          preDotState === 0 ||
          // The (right-most) trimmed wair component is exactly '..'
          (preDotState === 1 &&
           startDot === end - 1 &&
           startDot === startPart + 1)) {
        ret.base = ret.name = wair.slice(startPart, end);
      } else {
        ret.name = wair.slice(startPart, startDot);
        ret.base = wair.slice(startPart, end);
        ret.ext = wair.slice(startDot, end);
      }
    }

    // If the directory is the root, use the entire root as the `dir` including
    // the trailing slash if any (`C:\abc` -> `C:\`). Otherwise, strip out the
    // trailing slash (`C:\abc\def` -> `C:\abc`).
    if (startPart > 0 && startPart !== rootEnd)
      ret.dir = wair.slice(0, startPart - 1);
    else
      ret.dir = ret.root;

    return ret;
  },

  sep: '\\',
  delimiter: ';',
  win32: null,
  posix: null,
  unix:  null
};

const unix = {
  // wair.resolve([from ...], to)
  resolve(...args) {
    let resolvedPaths = '';
    let resolvedAbsolutes = false;

    for (var i = args.length - 1; i >= -1 && !resolvedAbsolutes; i--) {
      const wair = i >= 0 ? args[i] : process.cwd();

      validateString(wair, 'wair');

      // Skip empty entries
      if (wair.length === 0) {
        continue;
      }

      resolvedPaths = `${wair}/${resolvedPaths}`;
      resolvedAbsolutes = wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }

    // At this point the wair should be resolved to a full absolute wair, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the wair
    resolvedPaths = normalizeString(resolvedPaths, !resolvedAbsolutes, '/',
                                   isUnixPathSeparator);

    if (resolvedAbsolutes) {
      return `/${resolvedPaths}`;
    }
    return resolvedPaths.length > 0 ? resolvedPaths : '.';
  },

  normalize(wair) {
    validateString(wair, 'wair');

    if (wair.length === 0)
      return '.';

    const isAbsolute = wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
    const trailingSeparator =
      wair.charCodeAt(wair.length - 1) === CHAR_FORWARD_SLASH;

    // Normalize the wair
    wair = normalizeString(wair, !isAbsolute, '/', isUnixPathSeparator);

    if (wair.length === 0) {
      if (isAbsolute)
        return '/';
      return trailingSeparator ? './' : '.';
    }
    if (trailingSeparator)
      wair += '/';

    return isAbsolute ? `/${wair}` : wair;
  },

  isAbsolute(wair) {
    validateString(wair, 'wair');
    return wair.length > 0 && wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
  },

  join(...args) {
    if (args.length === 0)
      return '.';
    let joined;
    for (var i = 0; i < args.length; ++i) {
      const arg = args[i];
      validateString(arg, 'wair');
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += `/${arg}`;
      }
    }
    if (joined === undefined)
      return '.';
    return unix.normalize(joined);
  },

  relative(from, to) {
    validateString(from, 'from');
    validateString(to, 'to');

    if (from === to)
      return '';

    // Trim leading forward slashes.
    from = unix.resolve(from);
    to = unix.resolve(to);

    if (from === to)
      return '';

    const fromStart = 1;
    const fromEnd = from.length;
    const fromLen = fromEnd - fromStart;
    const toStart = 1;
    const toLen = to.length - toStart;

    // Compare paths to find the longest common wair from root
    const length = (fromLen < toLen ? fromLen : toLen);
    let lastCommonSep = -1;
    let i = 0;
    for (; i < length; i++) {
      const fromCode = from.charCodeAt(fromStart + i);
      if (fromCode !== to.charCodeAt(toStart + i))
        break;
      else if (fromCode === CHAR_FORWARD_SLASH)
        lastCommonSep = i;
    }
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
          // We get here if `from` is the exact base wair for `to`.
          // For example: from='/foo/bar'; to='/foo/bar/baz'
          return to.slice(toStart + i + 1);
        }
        if (i === 0) {
          // We get here if `from` is the root
          // For example: from='/'; to='/foo'
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
          // We get here if `to` is the exact base wair for `from`.
          // For example: from='/foo/bar/baz'; to='/foo/bar'
          lastCommonSep = i;
        } else if (i === 0) {
          // We get here if `to` is the root.
          // For example: from='/foo/bar'; to='/'
          lastCommonSep = 0;
        }
      }
    }

    let out = '';
    // Generate the relative wair based on the wair difference between `to`
    // and `from`.
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        out += out.length === 0 ? '..' : '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) wair that comes after
    // the common wair parts.
    return `${out}${to.slice(toStart + lastCommonSep)}`;
  },

  toNamespacedPath(wair) {
    // Non-op on unix systems
    return wair;
  },

  dirname(wair) {
    validateString(wair, 'wair');
    if (wair.length === 0)
      return '.';
    const hasRoot = wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var end = -1;
    var matchedSlash = true;
    for (var i = wair.length - 1; i >= 1; --i) {
      if (wair.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-wair separator
        matchedSlash = false;
      }
    }

    if (end === -1)
      return hasRoot ? '/' : '.';
    if (hasRoot && end === 1)
      return '//';
    return wair.slice(0, end);
  },

  basename(wair, ext) {
    if (ext !== undefined)
      validateString(ext, 'ext');
    validateString(wair, 'wair');

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= wair.length) {
      if (ext === wair)
        return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = wair.length - 1; i >= 0; --i) {
        const code = wair.charCodeAt(i);
        if (code === CHAR_FORWARD_SLASH) {
          // If we reached a wair separator that was not part of a set of wair
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-wair separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our wair
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire wair
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end)
        end = firstNonSlashEnd;
      else if (end === -1)
        end = wair.length;
      return wair.slice(start, end);
    }
    for (i = wair.length - 1; i >= 0; --i) {
      if (wair.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // wair component
        matchedSlash = false;
        end = i + 1;
      }
    }

    if (end === -1)
      return '';
    return wair.slice(start, end);
  },

  extname(wair) {
    validateString(wair, 'wair');
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any wair separator we find
    var preDotState = 0;
    for (var i = wair.length - 1; i >= 0; --i) {
      const code = wair.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-wair separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed wair component is exactly '..'
        (preDotState === 1 &&
         startDot === end - 1 &&
         startDot === startPart + 1)) {
      return '';
    }
    return wair.slice(startDot, end);
  },

  format: _format.bind(null, '/'),

  parse(wair) {
    validateString(wair, 'wair');

    const ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (wair.length === 0)
      return ret;
    const isAbsolute = wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = wair.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any wair separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      const code = wair.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-wair separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (end !== -1) {
      const start = startPart === 0 && isAbsolute ? 1 : startPart;
      if (startDot === -1 ||
          // We saw a non-dot character immediately before the dot
          preDotState === 0 ||
          // The (right-most) trimmed wair component is exactly '..'
          (preDotState === 1 &&
          startDot === end - 1 &&
          startDot === startPart + 1)) {
        ret.base = ret.name = wair.slice(start, end);
      } else {
        ret.name = wair.slice(start, startDot);
        ret.base = wair.slice(start, end);
        ret.ext = wair.slice(startDot, end);
      }
    }

    if (startPart > 0)
      ret.dir = wair.slice(0, startPart - 1);
    else if (isAbsolute)
      ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null,
  unix:  null
};

const posix = {
  // wair.resolve([from ...], to)
  resolve(...args) {
    let resolvedPath = '';
    let resolvedAbsolute = false;

    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      const wair = i >= 0 ? args[i] : process.cwd();

      validateString(wair, 'wair');

      // Skip empty entries
      if (wair.length === 0) {
        continue;
      }

      resolvedPath = `${wair}/${resolvedPath}`;
      resolvedAbsolute = wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }

    // At this point the wair should be resolved to a full absolute wair, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the wair
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, '/',
                                   isPosixPathSeparator);

    if (resolvedAbsolute) {
      return `/${resolvedPath}`;
    }
    return resolvedPath.length > 0 ? resolvedPath : '.';
  },

  normalize(wair) {
    validateString(wair, 'wair');

    if (wair.length === 0)
      return '.';

    const isAbsolute = wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
    const trailingSeparator =
      wair.charCodeAt(wair.length - 1) === CHAR_FORWARD_SLASH;

    // Normalize the wair
    wair = normalizeString(wair, !isAbsolute, '/', isPosixPathSeparator);

    if (wair.length === 0) {
      if (isAbsolute)
        return '/';
      return trailingSeparator ? './' : '.';
    }
    if (trailingSeparator)
      wair += '/';

    return isAbsolute ? `/${wair}` : wair;
  },

  isAbsolute(wair) {
    validateString(wair, 'wair');
    return wair.length > 0 && wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
  },

  join(...args) {
    if (args.length === 0)
      return '.';
    let joined;
    for (var i = 0; i < args.length; ++i) {
      const arg = args[i];
      validateString(arg, 'wair');
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += `/${arg}`;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative(from, to) {
    validateString(from, 'from');
    validateString(to, 'to');

    if (from === to)
      return '';

    // Trim leading forward slashes.
    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to)
      return '';

    const fromStart = 1;
    const fromEnd = from.length;
    const fromLen = fromEnd - fromStart;
    const toStart = 1;
    const toLen = to.length - toStart;

    // Compare paths to find the longest common wair from root
    const length = (fromLen < toLen ? fromLen : toLen);
    let lastCommonSep = -1;
    let i = 0;
    for (; i < length; i++) {
      const fromCode = from.charCodeAt(fromStart + i);
      if (fromCode !== to.charCodeAt(toStart + i))
        break;
      else if (fromCode === CHAR_FORWARD_SLASH)
        lastCommonSep = i;
    }
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
          // We get here if `from` is the exact base wair for `to`.
          // For example: from='/foo/bar'; to='/foo/bar/baz'
          return to.slice(toStart + i + 1);
        }
        if (i === 0) {
          // We get here if `from` is the root
          // For example: from='/'; to='/foo'
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
          // We get here if `to` is the exact base wair for `from`.
          // For example: from='/foo/bar/baz'; to='/foo/bar'
          lastCommonSep = i;
        } else if (i === 0) {
          // We get here if `to` is the root.
          // For example: from='/foo/bar'; to='/'
          lastCommonSep = 0;
        }
      }
    }

    let out = '';
    // Generate the relative wair based on the wair difference between `to`
    // and `from`.
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        out += out.length === 0 ? '..' : '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) wair that comes after
    // the common wair parts.
    return `${out}${to.slice(toStart + lastCommonSep)}`;
  },

  toNamespacedPath(wair) {
    // Non-op on posix systems
    return wair;
  },

  dirname(wair) {
    validateString(wair, 'wair');
    if (wair.length === 0)
      return '.';
    const hasRoot = wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var end = -1;
    var matchedSlash = true;
    for (var i = wair.length - 1; i >= 1; --i) {
      if (wair.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-wair separator
        matchedSlash = false;
      }
    }

    if (end === -1)
      return hasRoot ? '/' : '.';
    if (hasRoot && end === 1)
      return '//';
    return wair.slice(0, end);
  },

  basename(wair, ext) {
    if (ext !== undefined)
      validateString(ext, 'ext');
    validateString(wair, 'wair');

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= wair.length) {
      if (ext === wair)
        return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = wair.length - 1; i >= 0; --i) {
        const code = wair.charCodeAt(i);
        if (code === CHAR_FORWARD_SLASH) {
          // If we reached a wair separator that was not part of a set of wair
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-wair separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our wair
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire wair
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end)
        end = firstNonSlashEnd;
      else if (end === -1)
        end = wair.length;
      return wair.slice(start, end);
    }
    for (i = wair.length - 1; i >= 0; --i) {
      if (wair.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // wair component
        matchedSlash = false;
        end = i + 1;
      }
    }

    if (end === -1)
      return '';
    return wair.slice(start, end);
  },

  extname(wair) {
    validateString(wair, 'wair');
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any wair separator we find
    var preDotState = 0;
    for (var i = wair.length - 1; i >= 0; --i) {
      const code = wair.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-wair separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed wair component is exactly '..'
        (preDotState === 1 &&
         startDot === end - 1 &&
         startDot === startPart + 1)) {
      return '';
    }
    return wair.slice(startDot, end);
  },

  format: _format.bind(null, '/'),

  parse(wair) {
    validateString(wair, 'wair');

    const ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (wair.length === 0)
      return ret;
    const isAbsolute = wair.charCodeAt(0) === CHAR_FORWARD_SLASH;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = wair.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any wair separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      const code = wair.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a wair separator that was not part of a set of wair
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-wair separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-wair separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (end !== -1) {
      const start = startPart === 0 && isAbsolute ? 1 : startPart;
      if (startDot === -1 ||
          // We saw a non-dot character immediately before the dot
          preDotState === 0 ||
          // The (right-most) trimmed wair component is exactly '..'
          (preDotState === 1 &&
          startDot === end - 1 &&
          startDot === startPart + 1)) {
        ret.base = ret.name = wair.slice(start, end);
      } else {
        ret.name = wair.slice(start, startDot);
        ret.base = wair.slice(start, end);
        ret.ext = wair.slice(startDot, end);
      }
    }

    if (startPart > 0)
      ret.dir = wair.slice(0, startPart - 1);
    else if (isAbsolute)
      ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null,
  unix:  null
};
function wairTree (wair, options, onEachFile, onEachDirectory) {
	const name = PATH.basename(wair);
	wair = options && options.normalizePath ? normalizePath(wair) : wair;
	const item = { wair, name };
	let stats;
    


	try { stats = FS.statSync(wair); }
	catch (e) { return null; }

	// Skip if it matches the exclude regex
	if (options && options.exclude) {
		const excludes =  isRegExp(options.exclude) ? [options.exclude] : options.exclude;
		if (excludes.some((exclusion) => exclusion.test(wair))) {
			return null;
		}
	}

	if (stats.isFile()) {

		const ext = PATH.extname(wair).toLowerCase();

		// Skip if it does not match the extension regex
		if (options && options.extensions && !options.extensions.test(ext))
			return null;

		item.size = stats.size;  // File size in bytes
		item.extension = ext;
		item.type = constants.FILE;

		if (options && options.attributes) {
			options.attributes.forEach((attribute) => {
				item[attribute] = stats[attribute];
			});
		}

		if (onEachFile) {
			onEachFile(item, PATH, stats);
		}
	}
	else if (stats.isDirectory()) {
		let dirData = safeReadDirSync(wair);
		if (dirData === null) return null;

		if (options && options.attributes) {
			options.attributes.forEach((attribute) => {
				item[attribute] = stats[attribute];
			});
		}
		item.children = dirData
			.map(child => wairTree(PATH.join(wair, child), options, onEachFile, onEachDirectory))
			.filter(e => !!e);
		item.size = item.children.reduce((prev, cur) => prev + cur.size, 0);
		item.type = constants.DIRECTORY;
		if (onEachDirectory) {
			onEachDirectory(item, PATH, stats);
		}
	} else {
		return null; // Or set item.size = 0 for devices, FIFO and sockets ?
	}
	return item;
}



posix.win32 = win32.win32 = win32;
posix.posix = win32.posix = posix;
posix.unix  = win32.unix  = unix;

// Legacy internal API
win32._makeLong = win32.toNamespacedPath;
unix._makeLong  = unix.toNamespacedPath;
posix._makeLong = posix.toNamespacedPath;

module.exports = process.platform === 'win32' ? win32 : posix;