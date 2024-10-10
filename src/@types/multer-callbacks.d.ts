/**
 * Typing callback functions used in Multer configuration
 */

export type DestinationCallback = (
	error: Error | null,
	destination: string
) => void
export type FileNameCallback = (error: Error | null, filename: string) => void
