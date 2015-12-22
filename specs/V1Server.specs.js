import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
let should = chai.should();
import * as Sut from './../dist/V1Server';

describe('src/V1Server', function () {
	let actual;
	describe('given a V1 instance server url, protocol, port, username, password', () => {
		let v1ServerInfo;
		beforeEach(() => {
			v1ServerInfo = {
				hostname: 'some URL',
				instance: 'some Instance',
				protocol: 'https:',
				port: '8081'
			};
		});

		describe('when getting the Urls for the VersionOne instance', () => {
			beforeEach(() => {
				actual = Sut.getUrlsForV1Server(v1ServerInfo);
			});

			it.skip('it should return a way to get the Rest API Url', () => {
				should.exist(actual.rest);
			});
		});

		describe('when getting the rest Url', () => {
			beforeEach(() => {
				actual = Sut.getUrlsForV1Server(v1ServerInfo).rest();
			});

			it('it should return the Rest API Url', () => {
				actual.should.equal('https://some URL/some Instance:8081/rest-1.v1/Data');
			});
		});

		describe('when getting the query.v1 Url', () => {
			beforeEach(() => {
				actual = Sut.getUrlsForV1Server(v1ServerInfo).query();
			});

			it('it should return the Rest API Url', () => {
				actual.should.equal('https://some URL/some Instance:8081/query.v1');
			});
		});
	});
});