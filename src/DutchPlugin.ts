import { join } from 'path';
import { Client, IPlugin, Lang, Logger, Plugin } from 'yamdbf';

export class DutchPlugin extends Plugin implements IPlugin
{
	public readonly name: string = 'lang-dutch';

	private readonly _client: Client;

	public constructor(client: Client)
	{
		super();

		this._client = client;
	}

	public async init(): Promise<void>
	{
		const dir: string = join(__dirname, 'nl_nl');
		Logger.instance().debug(this.name, `Loading language files from "${dir}"`);

		Lang.setMetaValue('nl_nl', 'name', 'Dutch');
		Lang.loadLocalizationsFrom(dir);
		Lang.loadCommandLocalizationsFrom(dir);
	}
}
