

export enum OpenViduRole {
	PUBLISHER = 'PUBLISHER',
	SUBSCRIBER = 'SUBSCRIBER'
}

export enum BrowserMode {
	EMULATE = 'emulate',
	REAL = 'real'
}

export interface PublisherProperties {
	userId: string,
	sessionName: string,
	role: OpenViduRole,
	audio: boolean,
	video: boolean,
	resolution?: string,
	token?: string,


	// Only with BrowserMode=REAL
	recording?: boolean
	videoElements?: boolean
}
