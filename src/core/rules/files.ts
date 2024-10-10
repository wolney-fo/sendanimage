const twoMegabytesInBytes = 2 * 1024 * 1024

export const fileRules = {
	maximumSizeInBytes: twoMegabytesInBytes,
	allowedMimes: ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'],
}
