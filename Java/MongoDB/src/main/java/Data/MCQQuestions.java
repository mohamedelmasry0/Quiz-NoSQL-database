package Data;
import java.util.Arrays;
import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;



public class MCQQuestions {
	/*
	 * Requires the MongoDB Java Driver.
	 * https://mongodb.github.io/mongo-java-driver
	 */

	MongoClient mongoClient = new MongoClient(
	    new MongoClientURI(
	       // "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
	    		"mongodb://localhost:27017/"
	    )
	);
	MongoDatabase database = mongoClient.getDatabase("Quiz");
	MongoCollection<Document> collection = database.getCollection("MCQQuestions");

	FindIterable<Document> result = (FindIterable<Document>) collection.aggregate(Arrays.asList(new Document()));
}
