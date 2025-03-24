import config from "../config/config";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    //Variables
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async creaatePost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                });
        } catch (error) {
            console.log("Create Post", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId, documentId }) {
        try {

            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                });

        } catch (error) {
            console.log("Update Post", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Delete Post", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Get Post", error);
            
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Get Posts", error);    
            return false;
        }
    }


    //file upload

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            log("Upload File", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(config.appWriteBucketId, fileId);
        } catch (error) {
            console.log("Delete File", error);
            return false;
        }
    }

    getFilePreview(fileId){
      return this.storage.getFilePreview(config.appWriteBucketId, fileId);
    }
   
}

const servivce = new Service();

export default servivce;